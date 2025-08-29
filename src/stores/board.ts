import {  reactive } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('board', () => {
  const boards:string[] = reactive([])
  const addBoard:Function = (name:string):string[] => {
    boards.push(name)
    return boards
  }

  return { addBoard, boards }
})
