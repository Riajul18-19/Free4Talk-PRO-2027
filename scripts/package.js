import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const rootDir = process.cwd();
const distDir = path.join(rootDir, "dist");
const zipName = "Free4talk-Pro-v27-2027.zip";
const zipPath = path.join(distDir, zipName);

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

console.log("Packaging Free4Talk Pro V27 (2027 Edition)...");

try {
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  // Create zip bundle with all extension assets
  execSync(
    `zip -r "${zipPath}" manifest.json logo.png service-worker-loader.js assets public src index.html style.css script.js README.md -x "*.git*"`,
    { stdio: "inherit" }
  );

  console.log(`Successfully built package at: ${zipPath}`);
} catch (err) {
  console.error("Failed to package extension:", err);
  process.exit(1);
}
