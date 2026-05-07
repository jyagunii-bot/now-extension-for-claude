
# Now Extension for Claude

A Chrome extension that automatically adds the current date and time to your messages on Claude.ai.

## How it works
🕐 Thu, May 7, 2026, 1:09 PM
Help me plan tomorrow's schedule.

Now Claude knows what "tomorrow" actually means.

## Why I built this

There's a similar extension for ChatGPT called "Time-Aware ChatGPT", but nothing like it existed for Claude. So I made one.

Claude is smart, but it doesn't know what time it is. That makes phrases like "by tomorrow" or "in 3 hours" confusing. With this extension, the timestamp is automatically included, so the conversation flows more naturally.

## How to install

1. Click **Code → Download ZIP** on this page and extract the folder
2. Open `chrome://extensions/` in Chrome
3. Turn on **Developer mode** (top right)
4. Click **Load unpacked** and select the extracted folder
5. Open [claude.ai](https://claude.ai) and start typing

## Features

- Fully automatic — no clicking required
- Locale-aware — uses your browser's language and timezone
- Works in any language supported by `Intl.DateTimeFormat` (tested in English, Japanese, Italian, French)
- One-click toggle from the extension popup
- No tracking, no analytics, no external requests
- Works on all Claude.ai plans (Free, Pro, Max, Team)

## License

MIT — free to use, modify, and redistribute.

## Author

Built by [@jyagunii-bot](https://github.com/jyagunii-bot) with help from Claude.

---

## 日本語

Claude.aiにメッセージを送るときに、自動で日時を先頭に付けてくれるChrome拡張です。

### こんなふうに動きます
🕐 2026年5月7日(木) 13:27
明日の予定を一緒に考えて

これでClaudeが「明日」がいつなのか分かります。

### なんで作ったか

ChatGPTには「Time-Aware ChatGPT」という似た拡張があったけど、Claude用は無かったので作りました。

Claudeは賢いけど、今が何時か知らないので「明日までに」「3時間後に」みたいな話が通じにくいんですよね。これを入れておくと自動で時刻が伝わるので会話が楽になります。

### 使い方

1. このページの「Code」ボタン → 「Download ZIP」でダウンロード
2. ZIPを解凍する
3. Chromeで `chrome://extensions/` を開く
4. 右上の「デベロッパーモード」をONにする
5. 「パッケージ化されていない拡張機能を読み込む」を押して、解凍したフォルダを選ぶ
6. claude.aiを開いて使う

### 特徴

- 自動で時刻が入る（手動操作なし）
- ブラウザの言語設定に合わせて表示が変わる（日本語、英語、フランス語など）
- 自分のPCのタイムゾーンを使う
- ON/OFF切り替えできる
- データ収集なし、外部通信なし
- 全プラン対応（無料・Pro・Max・Team）

### ライセンス

MITライセンスです。自由に使ってください。

### 作者

[@jyagunii-bot](https://github.com/jyagunii-bot)

プログラミング素人がClaudeと一緒に作りました。バグや要望があればIssuesで教えてください。
