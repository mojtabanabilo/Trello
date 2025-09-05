<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
            <button @click="$emit('cancel')" class="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
                ✕
            </button>

            <h2 class="text-xl font-semibold mb-4">Add / Edit Card</h2>

            <form @submit.prevent="handleSave" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-1">Upload Image</label>
                    <input type="file" accept="image/*" @change="handleFileUpload"
                        class="w-full bg-gray-200 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none" />
                    <div v-if="form.image" class="mt-2">
                        <img :src="form.image" alt="Preview" class="w-full h-40 object-contain rounded-lg border" />
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Title</label>
                    <input v-model="form.title" type="text"
                        class="w-full bg-gray-200 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter card title" />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Description</label>
                    <textarea v-model="form.description" rows="3"
                        class="w-full bg-gray-200 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Enter description"></textarea>
                </div>

                <div class="flex justify-end gap-3 pt-4">
                    <button type="button" @click="$emit('cancel')"
                        class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                        Cancel
                    </button>
                    <button type="submit" class="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { CardForm } from '@/types/types'

const props = defineProps<{
    show: boolean
    initialData?: CardForm
}>()

const emit = defineEmits<{
    (e: 'save', data: CardForm): void
    (e: 'cancel'): void
}>()

const form = reactive<CardForm>({
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
        { id: 1, name: 'User 1', avatar: 'https://i.pravatar.cc/100?img=1' },
        { id: 2, name: 'User 2', avatar: 'https://i.pravatar.cc/100?img=2' },
        { id: 3, name: 'User 3', avatar: 'https://i.pravatar.cc/100?img=3' },
    ],
    extraUsers: 1,
})

// اگه دیتا از بیرون بیاد (ویرایش کارت)
watch(
    () => props.initialData,
    (val) => {
        if (val) {
            form.image = val.image
            form.title = val.title
            form.description = val.description
        }
    },
    { immediate: true }
)

const handleFileUpload = (event: Event) => {
    const target = event.target as HTMLInputElement
    if (target.files && target.files[0]) {
        form.image = URL.createObjectURL(target.files[0])
    }
}

const handleSave = () => {
    emit('save', form)
}
</script>
