import crypto from "crypto";
import fs from "fs";
import path from "path";

// Import all data files
import { adventureMoves } from "./data/adventure-moves.mjs";
import { peripheralMoves } from "./data/peripheral-moves.mjs";
import { chaseMoves } from "./data/chase-moves.mjs";
import { favorMoves } from "./data/favor-moves.mjs";
import { followerMoves } from "./data/follower-moves.mjs";
import { barbarianMoves } from "./data/barbarian.mjs";
import { bardMoves } from "./data/bard.mjs";
import { clericMoves } from "./data/cleric.mjs";
import { clericMiracles } from "./data/cleric-miracles.mjs";
import { druidMoves } from "./data/druid.mjs";
import { fighterMoves } from "./data/fighter.mjs";
import { immolatorMoves } from "./data/immolator.mjs";
import { paladinMoves } from "./data/paladin.mjs";
import { rangerMoves } from "./data/ranger.mjs";
import { thiefMoves } from "./data/thief.mjs";
import { wizardMoves } from "./data/wizard.mjs";
import { wizardSpells } from "./data/wizard-spells.mjs";
import { items } from "./data/items.mjs";
import { tags } from "./data/tags.mjs";
import { playbooks } from "./data/playbooks.mjs";

// Generate a deterministic 16-char alphanumeric ID from a seed string
function generateId(seed) {
  const hash = crypto.createHash("sha256").update(seed).digest("hex");
  return hash.slice(0, 16);
}

// Create a move document
function createMove(packName, move) {
  const id = generateId(`${packName}:${move.name}`);
  return {
    _id: id,
    name: move.name,
    type: "move",
    img: "icons/svg/dice-target.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      name: "",
      description: `<p>${move.description}</p>`,
      requiresMove: "",
      moveType: move.moveType || packName.replace("-moves", ""),
      rollFormula: "",
      moveGroup: "",
      moveResults: {
        success: {
          key: "system.moveResults.success.value",
          label: "Success!",
          value: move.results?.success ? `<p>${move.results.success}</p>` : ""
        },
        partial: {
          key: "system.moveResults.partial.value",
          label: "Partial Success",
          value: move.results?.partial ? `<p>${move.results.partial}</p>` : ""
        },
        failure: {
          key: "system.moveResults.failure.value",
          label: "Miss...",
          value: move.results?.failure ? `<p>${move.results.failure}</p>` : ""
        }
      },
      uses: 0,
      playbook: move.playbook || "",
      rollType: move.rollType || "",
      rollMod: 0,
      choices: ""
    },
    _stats: {
      systemId: "pbta",
      systemVersion: "1.1.16",
      coreVersion: "13.0",
      createdTime: null,
      modifiedTime: null,
      lastModifiedBy: null
    },
    sort: 0,
    ownership: { default: 0 }
  };
}

// Create an equipment document
function createEquipment(move) {
  const id = generateId(`items:${move.name}`);
  return {
    _id: id,
    name: move.name,
    type: "equipment",
    img: "icons/svg/item-bag.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      name: "",
      description: move.description ? `<p>${move.description}</p>` : "",
      equipmentType: move.equipmentType || "gear",
      tags: move.tags || "[]",
      quantity: 1,
      weight: 0,
      uses: move.uses || 0
    },
    _stats: {
      systemId: "pbta",
      systemVersion: "1.1.16",
      coreVersion: "13.0",
      createdTime: null,
      modifiedTime: null,
      lastModifiedBy: null
    },
    sort: 0,
    ownership: { default: 0 }
  };
}

// Create a tag document
function createTag(tag) {
  const id = generateId(`tags:${tag.name}`);
  return {
    _id: id,
    name: tag.name,
    type: "tag",
    img: "icons/svg/book.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      description: tag.description ? `<p>${tag.description}</p>` : ""
    },
    _stats: {
      systemId: "pbta",
      systemVersion: "1.1.16",
      coreVersion: "13.0",
      createdTime: null,
      modifiedTime: null,
      lastModifiedBy: null
    },
    sort: 0,
    ownership: { default: 0 }
  };
}

// Create a playbook document
function createPlaybook(pb) {
  const id = generateId(`playbooks:${pb.name}`);
  return {
    _id: id,
    name: pb.name,
    type: "playbook",
    img: "icons/svg/book.svg",
    effects: [],
    folder: null,
    flags: {},
    system: {
      slug: pb.name.toLowerCase(),
      description: pb.description ? `<p>${pb.description}</p>` : "",
      choiceSets: []
    },
    _stats: {
      systemId: "pbta",
      systemVersion: "1.1.16",
      coreVersion: "13.0",
      createdTime: null,
      modifiedTime: null,
      lastModifiedBy: null
    },
    sort: 0,
    ownership: { default: 0 }
  };
}

// Write a JSON source file
function writeSource(packName, doc) {
  const sourceDir = path.join("packs", packName, "_source");
  fs.mkdirSync(sourceDir, { recursive: true });
  const safeName = doc.name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
  const filename = `${safeName}_${doc._id}.json`;
  const filepath = path.join(sourceDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(doc, null, 2) + "\n");
  return filepath;
}

// Process a pack of moves
function processMoves(packName, moves) {
  let count = 0;
  for (const move of moves) {
    const doc = createMove(packName, move);
    writeSource(packName, doc);
    count++;
  }
  return count;
}

// Main
let totalFiles = 0;

// Core moves
const movePacks = [
  ["adventure-moves", adventureMoves],
  ["peripheral-moves", peripheralMoves],
  ["chase-moves", chaseMoves],
  ["favor-moves", favorMoves],
  ["follower-moves", followerMoves],
];
for (const [packName, moves] of movePacks) {
  const count = processMoves(packName, moves);
  console.log(`Generated ${count} entries for ${packName}`);
  totalFiles += count;
}

// Playbook moves
const playbookPacks = [
  ["barbarian-moves", barbarianMoves],
  ["bard-moves", bardMoves],
  ["cleric-moves", clericMoves],
  ["druid-moves", druidMoves],
  ["fighter-moves", fighterMoves],
  ["immolator-moves", immolatorMoves],
  ["paladin-moves", paladinMoves],
  ["ranger-moves", rangerMoves],
  ["thief-moves", thiefMoves],
  ["wizard-moves", wizardMoves],
];
for (const [packName, moves] of playbookPacks) {
  const count = processMoves(packName, moves);
  console.log(`Generated ${count} entries for ${packName}`);
  totalFiles += count;
}

// Spells and miracles (as moves)
const spellPacks = [
  ["wizard-spells", wizardSpells],
  ["cleric-miracles", clericMiracles],
];
for (const [packName, moves] of spellPacks) {
  const count = processMoves(packName, moves);
  console.log(`Generated ${count} entries for ${packName}`);
  totalFiles += count;
}

// Equipment/items
{
  let count = 0;
  for (const item of items) {
    const doc = createEquipment(item);
    writeSource("items", doc);
    count++;
  }
  console.log(`Generated ${count} entries for items`);
  totalFiles += count;
}

// Tags
{
  let count = 0;
  for (const tag of tags) {
    const doc = createTag(tag);
    writeSource("tags", doc);
    count++;
  }
  console.log(`Generated ${count} entries for tags`);
  totalFiles += count;
}

// Playbooks
{
  let count = 0;
  for (const pb of playbooks) {
    const doc = createPlaybook(pb);
    writeSource("playbooks", doc);
    count++;
  }
  console.log(`Generated ${count} entries for playbooks`);
  totalFiles += count;
}

console.log(`\nDone! Generated ${totalFiles} total source files.`);
