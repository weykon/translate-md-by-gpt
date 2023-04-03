var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// main.ts
var import_dotenv = __toESM(require("dotenv"));

// pmt_set.ts
var pmt = `
Input 'a markdown text' 'lng' {

    Each 'src' = each section(line) from \${a markdown text}
    Each 'trl' = each translation from \${src} to \${lng}

    Example '
        \${src}: # This is an example '= section'
        \${trl}: # \u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B '= translation'
        \${src}: Here is some more text '= section'
        \${trl}: \u8FD9\u91CC\u662F\u4E00\u4E9B\u66F4\u591A\u7684\u6587\u672C '= translation'
    '

    Each '
        \${src}: 'source line text'
        \${trl}: 'translation line text'  
    '
    Output = for Each like Example
}`;

// main.ts
var ai = __toESM(require("ai-say"));
import_dotenv.default.config();
ai.aisay.config({
  organization: process.env.ORG,
  apiKey: process.env.OPENAI_CHATGPT_KEY
});
var testString = `# This Readme is my first readme in github action
- A Game Engine in Rust
- One Mono Repo for all my projects
## Usage
- [ ] 1. Create a new repo
- [ ] 2. Copy the content of this repo into the new repo
\`\`\`
console.log('Hello World');
\`\`\`
`;
async function main() {
  const res = await ai.one_ask({
    model: "text-davinci-003",
    prompt: pmt + `Input(${testString},chinese)`,
    max_tokens: 2e3
  });
  console.log(res.data.choices[0]);
}
main();
//# sourceMappingURL=main.js.map