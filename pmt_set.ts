export const prompt = `
你将会接收到一段Markdown文本,其中的每一段落是%src%,对应%src%作翻译得出的文本记录为%trl%.
先判断是否以#或者-或者*开头,有保持markdown的格式.
然后每个[src]的下方都添加[trl],[trl]是他们的中文翻译.
将段落按照规则加入 %src%和%trl%标记，并输出。
%src%: # This Readme will build from github action
%trl%: # 这个Readme将会从github action中构建
%src%: As the past year, I learn a lot from open source.
%trl%: 过去的一年，我从开源中学到了很多。
%src%: But I am clear now that I wrote some simple code in the past.
%trl%: 但是我现在很清楚，我过去写了一些简单的代码。
%src%: There no more technical.
%trl%: 没有更多的技术了。
%src%: So I decide enroll in some lower level systematic code, such as
%trl%: 所以我决定报名一些较低级别的系统代码，例如
%src%: - ESC(Entity System Component) for game
%trl%: - 游戏ESC(Entity System Component)
%src%: - Machine Learning
%trl%: - 机器学习
%src%: - Backend into some auth manager
%trl%: - 后端进入一些认证管理器
%src%: - Computer Graphics In Rust
%trl%: - Rust中的计算机图形学
%src%: ## These are goals in 2023 year!
%trl%: ## 这些是2023年的目标!
%src%: **Let's do it.**
%trl%: **让我们做到这一点。**
---
以上的例子，明白了吗？ 如果明白，回复"我是markdown翻译官, 请让我翻译吧", 接下来等待我发出的多个段落的%src%,请你把所有的%src%:和%trl%:按上面这个规则输出来.
`

const md_regular = `标题：使用#（井号）表示标题，一个#表示一级标题，两个#表示二级标题，以此类推。
段落：段落之间用一个或多个空行隔开。
列表：使用符号“-”或“*”表示无序列表，使用数字和点号表示有序列表。
引用：使用“>”符号表示引用。
代码块：使用“'”（反引号）表示代码块，可以在反引号后面指定代码的语言类型。
粗体和斜体文本：使用“**”表示粗体，使用“*”表示斜体。
链接：使用“[]()”表示链接，方括号里是链接文字，圆括号里是链接地址。
图片：使用“![]()”表示图片，方括号里是图片文字，圆括号里是图片地址。`

// 108 tokens   518chars
const compose_prompt_from_gpt = `
您将接收到一段Markdown文本，其中每个段落都标有%src%，相应的翻译文本标为%trl%。首先判断是否以#、-、*开头以保持Markdown格式，然后为每个[src]段落下方添加[trl]，表示中文翻译。最后，按照规则输出带有标记的段落。

例如，以下是一个示例：

%src%: # This is an example
%trl%: # 这是一个示例
%src%: Here is some more text
%trl%: 这里是一些更多的文本

如果您理解了以上示例，请回复“我是markdown翻译官，请让我翻译”，并等待我发送使用上述规则进行输出的多个段落的%src%。`

// 74 tokens   343 chars
export const en_prompt = `As a Markdown translator, I will receive a Markdown text that has each paragraph labeled with %src%, with the corresponding Chinese translation labeled as %trl%. My task is to check whether each paragraph starts with #, -, or * to maintain the Markdown format, and add [trl] underneath each [src] paragraph to indicate the Chinese translation. Finally, I will output the labeled paragraphs according to the specified rules.

For example:
%src%: # This is an example
%trl%: # 这是一个示例
%src%: Here is some more text
%trl%: 这里是一些更多的文本

If you understand the example above, please reply with "I am ready to translate Markdown!" and I'll send you multiple paragraphs to format and output using the rules above.`

export const pmt =`
Input 'a markdown text' 'lng' {

    Each 'src' = each section(line) from \${a markdown text}
    Each 'trl' = each translation from \${src} to \${lng}

    Example '
        \${src}: # This is an example '= section'
        \${trl}: # 这是一个示例 '= translation'
        \${src}: Here is some more text '= section'
        \${trl}: 这里是一些更多的文本 '= translation'
    '

    Each '
        \${src}: 'source line text'
        \${trl}: 'translation line text'  
    '
    Output = for Each like Example
}`