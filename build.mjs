import { compilePack } from "@foundryvtt/foundryvtt-cli";
import fs from "fs";
import path from "path";

const packsDir = "./packs";

const packDirs = fs.readdirSync(packsDir).filter(d => {
  const sourcePath = path.join(packsDir, d, "_source");
  return fs.existsSync(sourcePath) && fs.readdirSync(sourcePath).length > 0;
});

for (const dir of packDirs) {
  const src = path.join(packsDir, dir, "_source");
  const dest = path.join(packsDir, dir);
  await compilePack(src, dest);
  console.log(`Packed ${dir}`);
}

console.log(`\nDone! Compiled ${packDirs.length} packs.`);
