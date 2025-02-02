import { parser } from "../dist/index.js";
import { fileTests } from "@lezer/generator/dist/test";

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
let caseDir = path.dirname(fileURLToPath(import.meta.url));

for (let file of fs.readdirSync(caseDir)) {
  if (file === "test-dictmarkdown.js") {
    continue;
  }

  let name = /^[^\.]*/.exec(file)[0];
  describe(name, () => {
    const tests = fileTests(
      fs.readFileSync(path.join(caseDir, file), "utf8"),
      file,
    );
    for (let { name, run } of tests) it(name, () => run(parser));
  });
}
