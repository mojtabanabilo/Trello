<template>
    <div class="p-6 flex min-h-50 gap-4 justify-start items-start overflow-x-auto flex-nowrap">
        <div class="flex flex-nowrap gap-4">
            <BoardsSection />
        </div>
        <div class="relative shrink-0 w-80 text-white bg-gray-400 hover:bg-gray-500 cursor-pointer duration-500 p-3 rounded cursor-pointer"
            @click="showModal = true">
            <button>Add board</button>
            <span class="absolute inset-y-0 right-2 grid w-8 place-content-center">
                <button type="button" aria-label="Submit"
                    class="rounded-full p-1.5 transition-colors dark:text-gray-300">
                    <img :src="addIcon" alt="search" />
                </button>
            </span>
        </div>
        <modal :show="showModal" @save="handleSave" @cancel="showModal = false" />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import addIcon from "@/assets/icon/icons8-add-50.png"
import { useBoardStore } from "@/stores/board";
import BoardsSection from "./BoardsSection.vue";
const storeBoard = useBoardStore()
const showModal = ref<boolean>(false)

const handleSave = (val: string): void => {
    storeBoard.addBoard(val)
    showModal.value = false
    console.log(storeBoard.boards)
}
</script>