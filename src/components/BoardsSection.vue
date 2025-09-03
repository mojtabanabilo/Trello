<template>
    <div v-for="item in storeBoard.boards" :key="item.id"
        class="relative w-80 border border-blue-600 bg-white hover:bg-blue-100 cursor-pointer duration-500 p-3 rounded cursor-pointer">
        <button>{{ item.name }}</button>
        <span class="absolute inset-y-0 right-2 grid w-8 place-content-center z-50">
            <Options :value="item.actions" @delete="storeBoard.deleteBoard(item.id)"
                @newCard="createCardsBoard(item.id)" />
        </span>
        <AddCardsModal :show="showModal" :initialData="selectedCard" @save="handleSave(item.id, $event)"
            @cancel="showModal = false" />
    </div>
</template>
<script setup lang="ts">
import AddCardsModal from './AddCardsModal.vue';
import { useBoardStore } from '@/stores/board';
import type { CardForm } from '@/types/types';
import Options from './Options.vue';
import { reactive, ref } from 'vue';
const showModal = ref<boolean>(false)
const selectedCard = reactive<CardForm>({
    image: '',
    title: '',
    description: '',
    progress: {
        value: 50,
        color: 'blue',
    },
    stats: {
        likes: 76,
        comments: 32,
        bookmarks: 66,
    },
    users: [
        { id: 1, name: 'User 1', avatar: 'https://example.com/u1.jpg' },
        { id: 2, name: 'User 2', avatar: 'https://example.com/u2.jpg' },
        { id: 3, name: 'User 3', avatar: 'https://example.com/u3.jpg' },
    ],
    extraUsers: 1,
})
const storeBoard = useBoardStore()
const createCardsBoard: Function = (id: string): void => {
    showModal.value = true
}
const handleSave: Function = (id: string, data: CardForm) => {
    storeBoard.addNewCard(id, data)
    showModal.value = false
}
</script>