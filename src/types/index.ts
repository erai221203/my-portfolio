export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  date?: string
  tag?: string
}

export interface Skill {
  name: string
  icon: string
  level: number
  category: 'tech' | 'programming' | 'soft' | 'hard'
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  link?: string
}

export interface Education {
  institution: string
  degree: string
  period: string
  grade: string
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  url: string
  image?: string
  fileName?: string
  category?: 'online' | 'workshop' | 'award' | 'publication' | 'hackathon'
}

export interface Client {
  name: string
  url: string
  logo: string
}
