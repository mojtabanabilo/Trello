<template>
    <template v-for="item in storeBoard.boards" :key="item.id">
        <div class="flex flex-col justify-center align-center">
            <div
                class="relative w-90 border border-blue-600 bg-white hover:bg-blue-100 cursor-pointer duration-500 p-3 rounded cursor-pointer">
                <button>{{ item.name }}</button>
                <span class="absolute inset-y-0 right-2 grid w-8 place-content-center z-50">
                    <Options :value="item.actions" @delete="storeBoard.deleteBoard(item.id)"
                        @newCard="createCardsBoard(item.id)" />
                </span>
            </div>
            <draggable v-model="item.cards" :group="{ name: 'cards', pull: true, put: true }" @change="onListChange"
                @start="drag = true" @end="drag = false" item-key="id">
                <template #item="{ element }">
                    <CardsSection :card="element" />
                </template>
                <template #footer>
                    <div v-if="item.cards.length === 0" class="flex justify-center items-center text-gray-400 text-xl text-center bg-gray-100 h-50">
                        Drop cards here
                    </div>
                </template>
            </draggable>
        </div>
    </template>
    <AddCardsModal :show="showModal" :initialData="selectedCard" @save="handleSave(saveBoradId, $event)"
        @cancel="showModal = false" />
</template>
<script setup lang="ts">
import AddCardsModal from './AddCardsModal.vue';
import draggable from 'vuedraggable'
import CardsSection from './CardsSection.vue';
import { useBoardStore } from '@/stores/board';
import type { CardForm } from '@/types/types';
import Options from './Options.vue';
import { ref } from 'vue';
import { ID } from '@/helper/utils';
const showModal = ref<boolean>(false)
const drag = ref<boolean>(false)
const saveBoradId = ref<string>('')
const selectedCard = ref<CardForm>({
    id: ID(),
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
// Handle changes
const onListChange = (event: any) => {
    console.log('List changed:', event)
}
const createCardsBoard = (id: string): void => {
    selectedCard.value = {
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
    }
    saveBoradId.value = id
    showModal.value = true
}
const handleSave = (id: string, data: CardForm) => {
    storeBoard.addNewCard(id, {
        ...data,
        id: ID(),
    })
    showModal.value = false
}
</script>