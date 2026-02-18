# Chasing Adventure - Foundry VTT PbtA Module

## Project Goal

Build a Foundry VTT v13 module for the **Chasing Adventure** tabletop RPG using the **Powered by the Apocalypse (PbtA)** system by Asacolips. The module should provide character sheets, moves, playbooks, items, and tags so a GM can run Chasing Adventure without manual TOML configuration.

## Reference Materials

All reference materials are in `ref/`. Read these before writing any code.

### Primary References

- **`ref/chasing_adventure_reference.md`** — The complete game reference extracted from the Chasing Adventure PDF. Contains all stats, conditions, moves (adventure, peripheral, chase, favor, follower), all 10 playbooks with backgrounds and advanced moves, items, tags, spells, miracles, NPCs, assets, and services. This is the source of truth for game content.

- **`ref/pbta.wiki/`** — The PbtA system documentation. Start with:
  - `Module-Integration.md` — How to register a module's sheet config via the `pbtaSheetConfig` hook
  - `TOML.md` — TOML syntax and structure for sheet configuration
  - `Actor-Sheet.md` — Actor sheet layout and attribute definitions
  - `Attribute-Types.md` — Available attribute types (Clock, Resource, Number, etc.)
  - `Stats.md` — How to define stats
  - `Rolls-and-Results.md` — Roll formula and result ranges
  - `Playbooks.md` — Playbook configuration
  - `Tags.md` — Tag system configuration
  - `Add‐On-Modules.md` — Additional module integration patterns

### Structural References

- **`ref/motw-example/`** — Monster of the Week PbtA module. A complete, working, v13-compatible reference implementation. Study its structure:
  - `module.json` — Manifest with PbtA system dependency, compendium pack definitions, esmodules registration
  - `module/motw-for-pbta.mjs` — Main JS entry point with `pbtaSheetConfig` hook, `sheetConfig` object, and tag overrides
  - `module/helper/config-sheet.mjs` — Sheet config object construction
  - `packs/` — LevelDB compendium packs for moves, playbooks, tags
  - `styles/` — Custom CSS
  - `languages/en.json` — Localization strings

- **`ref/foundry-module-development.md`** — Foundry VTT module development docs covering `module.json` manifest format, compendium pack definitions, file structure, and JS loading.

## Technical Architecture

### Core Pattern

The module uses the JS hook approach (not raw TOML) to register the sheet config programmatically. This is the standard pattern for PbtA add-on modules:

```javascript
Hooks.once('pbtaSheetConfig', () => {
  game.settings.set('pbta', 'sheetConfigOverride', true);

  // Optional: define custom tags
  game.pbta.tagConfigOverride = { ... };

  // Define the sheet config object
  game.pbta.sheetConfig = { ... };
});
```

Study `ref/motw-example/module/motw-for-pbta.mjs` and `ref/motw-example/module/helper/config-sheet.mjs` for the concrete implementation of this pattern.

### Chasing Adventure System Details

These are the key game mechanics to implement. All details are in `ref/chasing_adventure_reference.md`.

**Roll Formula:** `2d6` (standard PbtA)

**Roll Results:**
- 6-: Failure
- 7-9: Partial success
- 10+: Full success (some moves have 12+ effects)

**Stats (5):** Each stat has two associated conditions.
- STR (Weakened, Nauseous)
- DEX (Dizzy, Shaky, Stunned) — note: DEX has 3 conditions
- INT (Dazed, Forgetful)
- WIS (Confused, Exhausted)
- CHA (Scarred, Grumpy)

**Key Mechanic — Conditions as Harm:** Chasing Adventure uses conditions instead of HP. Each condition is tied to a stat. When a stat has a condition marked, rolls with that stat have Disadvantage but earn 1 XP. When all conditions are marked, the character Crumbles.

**Advantage/Disadvantage:** Roll 3d6 keep best 2 / worst 2. Can stack (4d6 keep 2, etc.).

**Armor:** Absorbs conditions from physical harm 1-for-1. Refreshes on Settle In.

**Resources to Track:**
- XP (0-5+, level up at 5)
- Level (starts at 1)
- Armor (varies by equipment)
- Wealth (abstract currency)
- Favor (relationship tracker — list of names)
- Drive (text field, changed via Epiphany)

**Playbooks (10):** Barbarian, Bard, Cleric, Druid, Fighter, Immolator, Paladin, Ranger, Thief, Wizard

Each playbook has:
- 3 Backgrounds (each with unique ability, starting stats, equipment, drive)
- Starting Moves (always have all of them)
- Advanced Moves (choose on level up)
- Level 10+ Moves
- Unique resources (e.g., Bard has Art, Cleric has Spirit, Fighter has Momentum, Ranger has Prep, Thief has Heat, Wizard has Spells/SPELL stat)

**Move Categories for Compendiums:**
- Adventure Moves (Defy, Engage, Let Fly, Ponder, Examine, Scrutinize, Compel, Cooperate, Push Yourself, Settle In)
- Peripheral Moves (End of Session, Crumble, Epiphany, Level Up, Track Down, Connect, Ask Around, Compensate, Rejoin)
- Chase Moves (Start the Chase, Gain the Edge, It's Over, Avalanche)
- Favor Moves (Gratify, Refuse, Antagonize, Appease)
- Follower Moves (Endeavor, Assist, Command)
- Per-playbook moves (starting + advanced for each of the 10 playbooks)

**NPC Actor Type:** Simpler sheet with Want, Methods, Conditions (1C/3C+), Armor, Tags/Descriptors.

### Module Structure

Target structure for the built module:

```
chasing-adventure/
  module.json
  module/
    chasing-adventure.mjs        # Main entry, pbtaSheetConfig hook
    helper/
      config-sheet.mjs           # Sheet config object
  packs/
    adventure-moves/             # Compendium: core adventure moves
    peripheral-moves/            # Compendium: peripheral moves
    chase-moves/                 # Compendium: chase moves
    favor-moves/                 # Compendium: favor moves
    follower-moves/              # Compendium: follower moves
    barbarian-moves/             # Compendium: per-playbook
    bard-moves/
    cleric-moves/
    cleric-miracles/
    druid-moves/
    fighter-moves/
    immolator-moves/
    paladin-moves/
    ranger-moves/
    thief-moves/
    wizard-moves/
    wizard-spells/
    items/                       # Compendium: weapons, armor, equipment, poisons
    tags/                        # Compendium: item tags
  styles/
    chasing-adventure.css        # Custom styling (optional)
  languages/
    en.json                      # Localization
```

### Module Manifest Key Fields

```json
{
  "id": "chasing-adventure",
  "compatibility": {
    "minimum": "13",
    "verified": "13"
  },
  "relationships": {
    "systems": [{
      "id": "pbta",
      "type": "system"
    }]
  }
}
```

## Development Notes

- **Target Foundry version:** v13
- **PbtA system version:** 1.1.16+ (v13-compatible)
- **Compendium format:** LevelDB (Foundry v10+). Packs are created by Foundry itself — define empty pack paths in `module.json`, then populate them via Foundry's UI or programmatically. For initial development, the JS sheet config is more important than pre-populated compendiums.
- **Priority order:** Get the sheet config working first (stats, conditions, attributes, move types), then layer in compendium content (moves, items, playbooks).
- **Testing:** Install the module into a local Foundry v13 instance at `{userData}/Data/modules/chasing-adventure/`, create a PbtA world, enable the module, and verify sheets render correctly.

## Style & Conventions

- Use ESModules (`esmodules` in manifest, `.mjs` extensions)
- Follow the patterns established in `ref/motw-example/` for structure and naming
- Keep the sheet config object clean and well-commented — this is the core of the module
- Use descriptive compendium pack names that match the game's terminology
