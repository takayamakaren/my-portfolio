const profile = [
  { label: 'Name', value: '山田 太郎' },
  { label: 'Location', value: 'Tokyo, Japan' },
  { label: 'Experience', value: '3+ years' },
  { label: 'Languages', value: '日本語 / English' },
]

const timeline = [
  {
    period: '2024 - 現在',
    title: 'フロントエンドエンジニア',
    place: '株式会社テクノコア',
    description:
      'React / TypeScript を用いたWebアプリケーション開発。デザインシステムの設計・構築、パフォーマンス改善を担当。チームリードとして5名のメンバーをマネジメント。',
    type: 'work' as const,
  },
  {
    period: '2022 - 2024',
    title: 'Webデベロッパー',
    place: '株式会社スタートアップラボ',
    description:
      'SPA / SSR アプリケーションの開発。フロントエンドに加え Node.js / PostgreSQL を用いたバックエンド開発も担当。',
    type: 'work' as const,
  },
  {
    period: '2022',
    title: 'フロントエンド開発 インターンシップ',
    place: '株式会社ウェブファクトリー',
    description:
      'React を用いた管理画面の実装。実務を通じて Git / GitHub Flow・コードレビューのプロセスを習得。',
    type: 'work' as const,
  },
  {
    period: '2018 - 2022',
    title: '情報工学部 情報システム学科 卒業',
    place: '〇〇大学',
    description:
      'コンピュータサイエンス・アルゴリズム・データ構造を専攻。卒業研究はWebアプリケーションのパフォーマンス最適化で優秀賞を受賞。',
    type: 'education' as const,
  },
]

const hobbies = [
  { icon: '📚', label: '読書', description: '技術書・SF小説' },
  { icon: '🏃', label: 'ランニング', description: '週3回の朝ラン' },
  { icon: '📷', label: '写真', description: '風景・街並み撮影' },
  { icon: '🎮', label: 'ゲーム', description: 'インディーゲーム' },
  { icon: '🌱', label: 'OSS活動', description: 'Issue・PR 作成' },
  { icon: '☕', label: 'カフェ巡り', description: '各地のコーヒー店' },
]

const typeStyles = {
  work: {
    dot: 'bg-indigo-500',
    badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
    label: 'Work',
  },
  education: {
    dot: 'bg-cyan-500',
    badge: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    label: 'Education',
  },
}

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          About Me
        </h2>

        {/* プロフィール */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          {/* アバター */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 dark:from-indigo-600 dark:to-cyan-600 flex items-center justify-center shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-28 h-28 text-white/80"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              {/* ステータスバッジ */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white dark:bg-gray-900 rounded-full px-3 py-1.5 shadow-lg border border-gray-100 dark:border-gray-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* テキスト */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              フロントエンド開発を中心に、Webアプリケーション開発に取り組んでいます。
              React / TypeScript を主な技術スタックとし、ユーザー体験を重視した
              シンプルで使いやすいインターフェース設計が得意です。
              チームでの開発経験も豊富で、コードレビューや設計議論にも積極的に参加しています。
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
              {profile.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5">
                    {label}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">{value}</p>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Resume をダウンロード
            </a>
          </div>
        </div>

        {/* タイムライン */}
        <div className="mb-24">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Career &amp; Education
          </h3>

          <div className="relative max-w-2xl mx-auto">
            {/* 縦線 */}
            <div
              className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"
              aria-hidden="true"
            />

            <ol className="space-y-10">
              {timeline.map((item, i) => {
                const style = typeStyles[item.type]
                return (
                  <li key={i} className="relative pl-14">
                    {/* ドット */}
                    <div
                      className={`absolute left-1.5 top-1 w-5 h-5 rounded-full ${style.dot} border-4 border-white dark:border-gray-950 shadow`}
                      aria-hidden="true"
                    />

                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        {item.period}
                      </span>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${style.badge}`}>
                        {style.label}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                      {item.place}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        {/* 趣味・関心事 */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Interests &amp; Hobbies
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {hobbies.map(({ icon, label, description }) => (
              <div
                key={label}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 text-center hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
              >
                <span className="text-3xl mb-2 block" role="img" aria-label={label}>
                  {icon}
                </span>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
