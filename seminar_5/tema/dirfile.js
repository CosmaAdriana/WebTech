import { mkdir, writeFile } from "fs/promises";
import { rimraf } from "rimraf";  

const dirPath = "./testDir";
const filePath = `${dirPath}/file.txt`;

async function run() {
  await mkdir(dirPath, { recursive: true });
  console.log("Director creat:", dirPath);

  await writeFile(filePath, "Salut din Node.js 👋");
  console.log("Fisier creat:", filePath);

  await rimraf(dirPath);
  console.log("Director sters:", dirPath);
}

run().catch(console.error);