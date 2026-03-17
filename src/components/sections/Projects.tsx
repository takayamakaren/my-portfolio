import { useState } from 'react'
import { projects } from '../../data/projects'

// プロジェクトIDに対応するサムネイルグラデーション
const thumbnailColors: Record<string, string> = {
  '1': 'from-indigo-100 to-violet-100 dark:from-indigo-900/40 dark:to-violet-900/40',
  '2': 'from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40',
  '3': 'from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40',
  '4': 'from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40',
  '5': 'from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40',
  '6': 'from-violet-100 to-purple-100 dark:from-violet-900/40 dark:to-purple-900/40',
}

const thumbnailIconColors: Record<string, string> = {
  '1': 'text-indigo-300 dark:text-indigo-700',
  '2': 'text-cyan-300 dark:text-cyan-700',
  '3': 'text-amber-300 dark:text-amber-700',
  '4': 'text-emerald-300 dark:text-emerald-700',
  '5': 'text-rose-300 dark:text-rose-700',
  '6': 'text-violet-300 dark:text-violet-700',
}

const fallbackGradient = 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700'
const fallbackIcon = 'text-gray-300 dark:text-gray-600'

export default function Projects() {
  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort()
  const [selected, setSelected] = useState<string | null>(null)

  const filtered = selected
    ? projects.filter((p) => p.tags.includes(selected))
    : projects

  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Projects
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
          個人・業務で取り組んだプロジェクト
        </p>

        {/* タグフィルター */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-12"
          role="group"
          aria-label="タグフィルター"
        >
          <button
            onClick={() => setSelected(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !selected
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
            <span className="ml-1.5 text-xs opacity-70">({projects.length})</span>
          </button>
          {allTags.map((tag) => {
            const count = projects.filter((p) => p.tags.includes(tag)).length
            return (
              <button
                key={tag}
                onClick={() => setSelected(tag === selected ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selected === tag
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              </button>
            )
          })}
        </div>

        {/* プロジェクトグリッド */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 dark:text-gray-600 py-16">
            該当するプロジェクトがありません
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => {
              const gradient = thumbnailColors[project.id] ?? fallbackGradient
              const iconColor = thumbnailIconColors[project.id] ?? fallbackIcon

              return (
                <article
                  key={project.id}
                  className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* サムネイル */}
                  <div
                    className={`h-44 bg-gradient-to-br ${gradient} flex items-center justify-center`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-14 h-14 ${iconColor}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* タグ */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* リンク */}
                    <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
