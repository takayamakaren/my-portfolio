import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Site',
    description:
      'React + Vite + TailwindCSS v4 で構築した個人ポートフォリオ。ダークモード・レスポンシブデザイン・GitHub Pages デプロイに対応。',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    demoUrl: 'https://yourusername.github.io/portfolio',
  },
  {
    id: '2',
    title: 'Task Manager App',
    description:
      'ドラッグ＆ドロップ対応のタスク管理アプリ。ローカルストレージで状態を永続化し、カテゴリ別のフィルタリング機能を実装。',
    tags: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    demoUrl: 'https://task-manager.example.com',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'Open-Meteo API を利用した天気予報ダッシュボード。位置情報取得・週間予報グラフ・気象アイコン表示に対応。',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    demoUrl: 'https://weather.example.com',
  },
  {
    id: '4',
    title: 'E-Commerce REST API',
    description:
      'Node.js + Express で実装した ECサイト向け RESTful API。JWT 認証・ページネーション・PostgreSQL との連携を実装。',
    tags: ['Node.js', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/yourusername/ec-api',
  },
  {
    id: '5',
    title: 'Real-time Chat App',
    description:
      'WebSocket を使ったリアルタイムチャットアプリ。ルーム機能・オンラインユーザー一覧・メッセージ既読管理を実装。',
    tags: ['React', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/chat-app',
    demoUrl: 'https://chat.example.com',
  },
  {
    id: '6',
    title: 'Markdown Blog',
    description:
      'Markdown ファイルベースの静的ブログ。Vite + React で構築し、シンタックスハイライト・タグ検索・RSS フィードを実装。',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/markdown-blog',
    demoUrl: 'https://blog.example.com',
  },
]
