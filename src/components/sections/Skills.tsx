import { skills } from '../../data/skills'
import type { Skill } from '../../types'

type Category = Skill['category']

const categories: { key: Category; label: string; description: string }[] = [
  { key: 'frontend', label: 'Frontend', description: 'UI / UX 開発' },
  { key: 'backend', label: 'Backend', description: 'サーバー・DB' },
  { key: 'tools', label: 'Tools', description: '開発環境・CI/CD' },
  { key: 'other', label: 'Others', description: 'その他' },
]

const categoryAccents: Record<Category, string> = {
  frontend: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20',
  backend: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20',
  tools: 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20',
  other: 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-900/20',
}

const dotColors: Record<Category, string> = {
  frontend: 'bg-indigo-500',
  backend: 'bg-emerald-500',
  tools: 'bg-amber-500',
  other: 'bg-rose-500',
}

const levelLabels: Record<number, string> = {
  1: 'Beginner',
  2: 'Elementary',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Expert',
}

interface SkillBadgeProps {
  skill: Skill
  dotColor: string
}

function SkillBadge({ skill, dotColor }: SkillBadgeProps) {
  return (
    <div className="flex items-center justify-between gap-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 hover:shadow-sm transition-shadow">
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
        {skill.name}
      </span>
      <div className="flex flex-col items-end gap-1 shrink-0">
        {/* レベルドット */}
        <div className="flex gap-1" aria-label={`レベル: ${levelLabels[skill.level]}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < skill.level ? dotColor : 'bg-gray-200 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
        <span className="text-[10px] text-gray-400 dark:text-gray-500">
          {levelLabels[skill.level]}
        </span>
      </div>
    </div>
  )
}

export default function Skills() {
  const activeCategories = categories.filter(({ key }) =>
    skills.some((s) => s.category === key),
  )

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Skills
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-16">
          日々の業務・個人開発で使用している技術スタック
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeCategories.map(({ key, label, description }) => {
            const categorySkills = skills.filter((s) => s.category === key)
            const accent = categoryAccents[key]
            const dot = dotColors[key]

            return (
              <div
                key={key}
                className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-6"
              >
                {/* カテゴリヘッダー */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-1 ${accent}`}>
                  <span>{label}</span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-5">{description}</p>

                {/* スキル件数バッジ */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {categorySkills.length} skills
                  </span>
                  {/* 平均レベルバー */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-gray-400 dark:text-gray-500">avg</span>
                    <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${dot}`}
                        style={{
                          width: `${
                            (categorySkills.reduce((sum, s) => sum + s.level, 0) /
                              (categorySkills.length * 5)) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* スキルバッジ一覧 */}
                <div className="flex flex-col gap-2">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} dotColor={dot} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* 凡例 */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {Object.entries(levelLabels).map(([level, label]) => (
            <div key={level} className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < Number(level)
                        ? 'bg-gray-500 dark:bg-gray-400'
                        : 'bg-gray-200 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
