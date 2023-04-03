import dotenv from 'dotenv';
import { prompt,en_prompt ,pmt} from './pmt_set';
import * as ai from 'ai-say';
import { ChatCompletionRequestMessage } from 'openai';

dotenv.config();
ai.aisay.config({
    organization: process.env.ORG!,
    apiKey: process.env.OPENAI_CHATGPT_KEY!
});
const testString = `# This Readme is my first readme in github action
- A Game Engine in Rust
- One Mono Repo for all my projects
## Usage
- [ ] 1. Create a new repo
- [ ] 2. Copy the content of this repo into the new repo
\`\`\`
console.log('Hello World');
\`\`\`
`
// console.log(testString)
async function main() {
    // const chats: ChatCompletionRequestMessage[] = [
    //     { role: 'system', content: pmt, },
    //     { role: 'assistant', content: '明白' },
    //     { role: 'user', content: testString },
    // ]
    // const res = await ai.chat(chats, 'gpt-3.5-turbo')
    // console.log(res.data.choices[0].message );

    const res = await ai.one_ask({
        model: 'text-davinci-003',
        prompt:  pmt+`Input(${testString},chinese)`,
        max_tokens: 2000,
    });
    console.log(res.data.choices[0]);
}

main();


