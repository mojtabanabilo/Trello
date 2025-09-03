<template>
    <div class="bg-white rounded-2xl shadow p-4 w-full max-w-sm">
        <!-- تصویر -->
        <img :src="card.image" alt="Card image" class="w-full h-48 object-cover rounded-xl mb-4" />

        <!-- عنوان -->
        <h3 class="font-semibold text-lg mb-1 line-clamp-2">
            {{ card.title }}
        </h3>

        <!-- توضیحات -->
        <p class="text-gray-500 text-sm mb-3 line-clamp-3">
            {{ card.description }}
        </p>

        <!-- Progress bar -->
        <div class="flex gap-2 mb-4">
            <div class="h-1 flex-1 rounded-full bg-blue-500"
                :class="{ 'bg-yellow-400': card.progress.color === 'yellow', 'bg-blue-500': card.progress.color === 'blue' }"
                :style="{ width: card.progress.value + '%' }"></div>
        </div>

        <!-- کاربران -->
        <div class="flex items-center mb-3">
            <div class="flex -space-x-3">
                <img v-for="u in card.users" :key="u.id" :src="u.avatar" :alt="u.name"
                    class="w-8 h-8 rounded-full border-2 border-white" />
            </div>
            <div v-if="card.extraUsers"
                class="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600">
                +{{ card.extraUsers }}
            </div>
        </div>

        <!-- Stats -->
        <div class="flex items-center justify-between text-gray-500 text-sm">
            <div class="flex items-center gap-1">
                👍 <span>{{ card.stats.likes }}</span>
            </div>
            <div class="flex items-center gap-1">
                💬 <span>{{ card.stats.comments }}</span>
            </div>
            <div class="flex items-center gap-1">
                📌 <span>{{ card.stats.bookmarks }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    card: {
        id: string
        image: string
        title: string
        description: string
        progress: { value: number; color: string }
        stats: { likes: number; comments: number; bookmarks: number }
        users: { id: number; name: string; avatar: string }[]
        extraUsers: number
    }
}>()
</script>
