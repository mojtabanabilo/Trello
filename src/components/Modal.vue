<template>
    <div v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-lg w-96 p-6">
            <h2 class="text-lg font-semibold mb-4">Add Card</h2>
            <input v-model="name" type="text" placeholder="Enter name..."
                class="w-full bg-gray-200 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 outline-none" />
            <div class="flex justify-end space-x-2">
                <button @click="$emit('cancel')" class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                    Cancel
                </button>
                <button @click="save" class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

defineProps<{
    show: boolean
}>()

const emit = defineEmits<{
    (e: 'save', value: string): void
    (e: 'cancel'): void
}>()

const name = ref("")

const save = () => {
    if (name.value.trim()) {
        emit("save", name.value)
        name.value = ""
    }
}
</script>
