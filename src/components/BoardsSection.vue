<template>
    <div v-for="(item, index) in storeBoard.boards" :key="index"
        class="relative w-80 border border-blue-600 bg-white hover:bg-blue-100 cursor-pointer duration-500 p-3 rounded cursor-pointer">
        <button>{{ item.name }}</button>
        <span class="absolute inset-y-0 right-2 grid w-8 place-content-center z-50">
            <Options :value="item.actions" @delete="deleteOptions" @newCard="newCardOptions" />
        </span>
    </div>
</template>
<script setup lang="ts">
import { useBoardStore } from '@/stores/board';
import Options from './Options.vue';
const storeBoard = useBoardStore()

const deleteOptions = () => {
}
const newCardOptions = () => { }
</script>