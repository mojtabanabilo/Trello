<template>
  <div class="relative inline-block text-left">
    <button @click="toggle" class="p-2 rounded cursor-pointer focus:outline-none p-a">
      <span class="text-2xl font-bold">⋯</span>
    </button>

    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <div v-if="open" class="absolute right-0 mt-2 w-40 bg-white rounded-lg drop-shadow z-50 origin-top-right">
        <ul class="py-1">
          <li v-for="(item, index) in props.value" :key="index">
            <button class="w-full px-4 py-2 text-left text-sm hover:bg-gray-100" @click="handleClick(item)">
              {{ item }}
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, onBeforeUnmount } from "vue"
const props = defineProps<{
  value: string[]
}>()
const emit = defineEmits(['delete', 'newCard'])
const open = ref(false)

const toggle = () => {
  open.value = !open.value
}

const handleClickOutside = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest(".relative")) {
    open.value = false
  }
}

const handleClick = (item: string) => {
  if (item === 'Delete') {
    emit('delete')
  } else if (item === 'New Card') {
    emit('newCard')
  }
  open.value = false
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})
</script>
