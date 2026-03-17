# ポートフォリオサイト 要件定義書

## 1. プロジェクト概要

| 項目 | 内容 |
|------|------|
| プロジェクト名 | 個人ポートフォリオサイト |
| サイト種別 | 静的サイト（SPA） |
| デプロイ先 | GitHub Pages |
| 作成日 | 2026-03-03 |

## 2. 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| React | 18.x | UIフレームワーク |
| Vite | 5.x | ビルドツール / 開発サーバー |
| TailwindCSS | 3.x | スタイリング |
| GitHub Actions | - | CI/CDパイプライン |
| GitHub Pages | - | ホスティング |

## 3. 機能要件

### 3.1 ページ構成（SPA）

シングルページアプリケーションとして、以下のセクションをスクロールで閲覧できる構成とする。

#### Hero セクション
- フルスクリーン表示
- 氏名・職種・キャッチコピーを表示
- CTA（Call to Action）ボタン：Contactセクションへのスクロールリンク
- 背景アニメーション（グラデーションまたはパーティクル等）

#### About セクション
- プロフィール写真（または代替アバター）
- 自己紹介文
- 経歴・学歴の概要（タイムライン形式）
- 趣味・関心事

#### Skills セクション
- スキルカテゴリ分類（Frontend / Backend / Tools / Others）
- 各スキルのアイコンまたはバッジ表示
- 習熟度インジケーター（プログレスバーまたはレベル表示）

#### Projects セクション
- プロジェクトカード一覧（グリッドレイアウト）
- 各カードに含める情報：
  - プロジェクト名
  - サムネイル画像
  - 概要説明
  - 使用技術タグ
  - GitHub リポジトリリンク
  - デモサイトリンク（任意）
- フィルタリング機能（技術タグによる絞り込み）

#### Contact セクション
- 問い合わせフォーム（名前・メールアドレス・メッセージ）
  - フォームの送信先：Formspree または EmailJS 等の外部サービスを利用
  - バリデーション：必須項目チェック・メールフォーマット確認
- SNSリンク一覧（GitHub / Twitter(X) / LinkedIn 等）

### 3.2 共通機能

#### ナビゲーション
- 固定ヘッダー（スクロール時に背景を半透明に変化）
- セクションへのスムーズスクロール
- 現在表示中のセクションをハイライト（Intersection Observer API利用）
- ハンバーガーメニュー（モバイル）

#### ダークモード
- システム設定（`prefers-color-scheme`）を初期値として自動適用
- トグルボタンで手動切り替え可能
- 選択状態を `localStorage` に保存し、再訪問時に維持

#### フッター
- コピーライト表示
- ページトップへ戻るボタン

## 4. 非機能要件

### 4.1 レスポンシブデザイン（モバイルファースト）

| ブレークポイント | 幅 | 対象デバイス |
|-----------------|-----|-------------|
| デフォルト（sm以下）| < 640px | スマートフォン |
| md | 640px〜 | タブレット |
| lg | 1024px〜 | デスクトップ |
| xl | 1280px〜 | 大型ディスプレイ |

- タッチ操作に対応したUI
- 最小フォントサイズ：16px（可読性確保）

### 4.2 パフォーマンス

- Lighthouse スコア目標：
  - Performance: 90以上
  - Accessibility: 95以上
  - Best Practices: 90以上
  - SEO: 90以上
- 画像最適化：WebP形式を優先使用、`loading="lazy"` 属性付与
- コード分割（React.lazy / Suspense）によるバンドルサイズ削減

### 4.3 アクセシビリティ

- セマンティックHTMLの使用（`<header>`, `<main>`, `<section>`, `<footer>` 等）
- WAI-ARIA属性の適切な付与
- キーボード操作対応
- カラーコントラスト比：WCAG AA 基準（4.5:1以上）準拠

### 4.4 SEO

- `<meta>` タグの適切な設定（title, description, OGP）
- `<html lang="ja">` の設定
- robots.txt / sitemap.xml の配置

## 5. デプロイ要件

### 5.1 GitHub Pages 設定

- リポジトリの `gh-pages` ブランチまたは `main` ブランチの `docs/` フォルダからデプロイ
- カスタムドメイン設定（任意）
- HTTPS 強制有効化

### 5.2 CI/CD（GitHub Actions）

- `main` ブランチへのプッシュをトリガーに自動ビルド・デプロイ
- ワークフロー概要：
  1. Node.js セットアップ
  2. 依存パッケージインストール（`npm ci`）
  3. プロダクションビルド（`npm run build`）
  4. `dist/` ディレクトリを GitHub Pages へデプロイ

### 5.3 Vite 設定

- `vite.config.ts` にて `base` オプションをリポジトリ名に合わせて設定
  ```ts
  // 例: https://<username>.github.io/<repo-name>/
  base: '/<repo-name>/'
  ```

## 6. ディレクトリ構成（想定）

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Projects.tsx
│   │       └── Contact.tsx
│   ├── hooks/
│   │   ├── useDarkMode.ts
│   │   └── useIntersectionObserver.ts
│   ├── data/
│   │   ├── skills.ts
│   │   └── projects.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 7. 開発フロー

1. リポジトリ作成・初期セットアップ（Vite + React + TailwindCSS）
2. セクション単位でコンポーネント実装
3. レスポンシブデザイン適用
4. ダークモード実装
5. アニメーション・インタラクション追加
6. パフォーマンス・アクセシビリティ最適化
7. GitHub Actions ワークフロー設定
8. デプロイ・動作確認

## 8. 将来的な拡張候補

- ブログ機能（Markdown ファイルベース）
- i18n 対応（日本語 / 英語切り替え）
- アニメーションライブラリ導入（Framer Motion）
- お問い合わせフォームのバックエンド自前実装
