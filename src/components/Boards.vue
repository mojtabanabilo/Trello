<template>
    <div class="p-6 flex justify-start items-center">
        <div class="relative w-70 text-white bg-gray-400 hover:bg-gray-500 cursor-pointer duration-500 p-3 rounded cursor-pointer"
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
const showModal = ref<boolean>(false)

const handleSave = (val: string):void => {
    showModal.value = false
}
</script>