import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __arquivo = fileURLToPath(import.meta.url);
const __pasta = path.dirname(__arquivo);

const arquivo = path.resolve(__pasta, "./arquivo.txt");

const conteudo = readFileSync(arquivo, "utf-8", (err, data) => {
  if (err) throw err;
  return data;
});
console.log(conteudo.toString().split("\n").sort().join("\n").trim());
