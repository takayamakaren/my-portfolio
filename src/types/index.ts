export interface Skill {
  name: string
  level: number // 1〜5
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface Project {
  id: string
  title: string
  description: string
  thumbnail?: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
}

export type Theme = 'light' | 'dark'
