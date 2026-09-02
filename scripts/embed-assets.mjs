import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const sourcePath = resolve(projectRoot, "worker/index.js");
const outputPath = resolve(projectRoot, "dist/server/index.js");

const [source, profile, cv, logo] = await Promise.all([
  readFile(sourcePath, "utf8"),
  readFile(resolve(projectRoot, "assets/profile.jpg")),
  readFile(resolve(projectRoot, "assets/femiel-jubil-tambunan-cv.pdf")),
  readFile(resolve(projectRoot, "assets/fjmt-bird-logo.png")),
]);

const output = source
  .replace("__PROFILE_BASE64__", profile.toString("base64"))
  .replace("__CV_BASE64__", cv.toString("base64"))
  .replace("__FJMT_LOGO_BASE64__", logo.toString("base64"));

if (
  output.includes("__PROFILE_BASE64__") ||
  output.includes("__CV_BASE64__") ||
  output.includes("__FJMT_LOGO_BASE64__")
) {
  throw new Error("Asset placeholders were not fully replaced");
}

await writeFile(outputPath, output);
