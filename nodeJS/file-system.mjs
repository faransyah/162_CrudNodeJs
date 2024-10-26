import fs from "fs";
import path from "path";

const buffer = fs.readFileSync("file-system.mjs");

console.info(buffer.toString());

fs.writeFileSync("temp.txt", "Hello World");