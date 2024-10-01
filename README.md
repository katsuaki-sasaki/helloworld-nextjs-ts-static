# Next.js TypeScript Hello World 初期設定とベストプラクティス（静的ファイルの生成）

これは、TypeScriptのNext.jsを用いて静的ファイルを生成するプロジェクトの初期設定とベストプラクティスを盛り込んだ構築例です。

## 目次
- [必要条件](#必要条件)
- [インストール](#インストール)
- [プロジェクトの実行](#プロジェクトの実行)
- [静的ファイルの生成](#静的ファイルの生成)
- [プロジェクトの構成](#プロジェクトの構成)
- [さらに詳しく](#さらに詳しく)

## 必要条件
- [Node.js](https://nodejs.org/) バージョン 14.x 〜 16.x
- [npm](https://www.npmjs.com/) または [yarn](https://yarnpkg.com/) の最新バージョン
- `styled-components` バージョン ^5.0

## インストール
1. リポジトリをクローンする：
   ```bash
   git clone https://github.com/katsuaki-sasaki/helloworld-nextjs-ts-static.git
   ```
2. プロジェクト・ディレクトリに移動する：
   ```bash
   cd helloworld-nextjs-ts-static
   ```
3. 依存関係をインストールします：  
   npmを使用する：
   ```bash
   npm install
   ```
   yarnを使用する:
   ```bash
   yarn
   ```

## プロジェクトの実行
インストールが完了したら、以下のコマンドで開発モードでプロジェクトを実行できる：

npmを使用する:
   ```bash
   npm run dev
   ```
yarnを使用する:
   ```bash
   yarn dev
   ```
ブラウザを開き、[http://localhost:3000](http://localhost:3000)にアクセスすると、"Hello World"のページが表示される。

## 静的ファイルの生成
このプロジェクトでは、Next.js の静的ファイル生成機能（Static Export）を使用して、完全な静的サイトをビルドすることができます。
静的ファイルを生成するには以下の手順を行ってください：

npmを使用する:
   ```bash
   npm run build
   ```
yarnを使用する:
   ```bash
   yarn build
   ```
これで、out フォルダに静的ファイルが生成され、静的なWebサイトとしてホストする準備が整います。
生成されたファイルは out/ ディレクトリにあります。

ブラウザで確認するには以下の手順を行ってください:

npmを使用する:
   ```bash
   npm run server
   ```
yarnを使用する:
   ```bash
   yarn server
   ```

## プロジェクトの構成
このプロジェクトは以下のような構成になっている：
   ```          
    helloworld-nextjs-ts-static/
    ├── pages/
    │   ├── about.tsx         # 単一ページ（例: Aboutページ）
    │   ├── blog/             # 複数ページを持つサブディレクトリ（例: 各ブログ記事のページ）
    │   │   ├── [slug].tsx    # 各ブログ記事の動的ルート
    │   │   └── index.tsx     # ブログ一覧ページ
    │   └── index.tsx         # ホームページ（Hello Worldメッセージを表示）
    ├── components/           # 共通コンポーネント
    │   ├── Button.tsx        # ボタンコンポーネント
    │   ├── Header.tsx        # ヘッダーコンポーネント
    │   └── SEO.tsx           # SEOのメタタグを管理するコンポーネント
    ├── public/               # 静的アセット（画像、フォントなど）
    ├── styles/
    │   ├── global.css        # グローバルスタイル
    │   └── components/       # コンポーネントごとのスタイル
    │       └── Button.module.css    # ボタンコンポーネント専用のスタイル
    ├── utils/                # ユーティリティ関数
    ├── next.config.js        # Next.js設定ファイル
    ├── package.json          # 依存関係
    └── README.md             # プロジェクト文書
   ```

### 重要なファイル
- `pages/index.tsx`: Hello World メッセージとSEO、画像最適化が行われているメインファイル。
- `components/SEO.tsx`: このコンポーネントは、ページごとのSEO設定（metaタグやtitleタグの動的設定）を管理します。各ページで異なるSEO情報を設定し、検索エンジンのランキング向上に役立てます。
- `styles/globals.css`: グローバルスタイルを管理。


## さらに詳しく
Next.jsの詳細については、以下のリソースをご覧ください：
- [Next.js Documentation](https://nextjs.org/docs) - Next.js公式ドキュメント
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.js学習コース

