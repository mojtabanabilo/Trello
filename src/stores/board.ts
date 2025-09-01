import { reactive } from 'vue'
import { defineStore } from 'pinia'
import type { Board } from '@/types/types'

const ID = function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
    (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
  );
}

export const useBoardStore = defineStore('board', () => {
  const boards: Board[] = reactive([])
  const addBoard: Function = (name: string) => {
    boards.push({
      id: ID(),
      name,
      actions: ['Delete', 'New Card'],
      cards: [],
    })
  }

  return { addBoard, boards }
})

// [
//     {
//       name: '',
//       actions: ['delete', 'newCard'],
//       cards: [
//         {
//           id: 1,
//           image: 'https://example.com/image.jpg', // عکس اصلی کارت
//           title: 'Unmatched toner cartridge quality 20 less than oem price',
//           description:
//             "Why read motivational sayings? For motivation! You might need a bit, if you can use last year's list of goals this year because it’s as good as new.",

//           progress: {
//             value: 50,
//             color: 'blue',
//           },

//           stats: {
//             likes: 76,
//             comments: 32,
//             bookmarks: 66,
//           },

//           users: [
//             { id: 1, name: 'User 1', avatar: 'https://example.com/u1.jpg' },
//             { id: 2, name: 'User 2', avatar: 'https://example.com/u2.jpg' },
//             { id: 3, name: 'User 3', avatar: 'https://example.com/u3.jpg' },
//           ],

//           extraUsers: 1,
//         },
//       ],
//     },
//   ]
