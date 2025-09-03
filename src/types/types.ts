// boards
export interface User {
  id: number
  name: string
  avatar: string
}

export interface Progress {
  value: number
  color: string
}

export interface Stats {
  likes: number
  comments: number
  bookmarks: number
}

export interface Card {
  id: number
  image: string
  title: string
  description: string
  progress: Progress
  stats: Stats
  users: User[]
  extraUsers: number
}
export interface Board {
  id: string
  name: string
  actions: string[]
  cards: any[]
}
// boards

// AddCardsModal
export interface CardForm {
  image: string
  title: string
  description: string
  progress: {
    value: number
    color: string
  }
  stats: {
    likes: number
    comments: number
    bookmarks: number
  }
  users: {
    id: number
    name: string
    avatar: string
  }[]
  extraUsers: number
}
// AddCardsModal
