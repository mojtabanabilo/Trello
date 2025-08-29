<template>
    <header class="bg-white">
        <div class="p-6 flex justify-between space-x-6 border-b border-gray-200">
            <div class="flex justify-center items-center space-x-10">
                <img :src="trelloLogo" alt="trello" class="cursor-pointer" />
                <splitter />
                <div class="flex justify-center items-start space-x-1 cursor-pointer">
                    <img :src="boardLogo" alt="board" />
                    <p class="font-bold">Boards</p>
                </div>
                <splitter />
                <div class="relative w-100">
                    <input type="text" id="Search"
                        class="rounded-2xl px-4 mt-0.5 w-full h-10 bg-gray-100 border-gray-300 shadow-sm sm:text-sm outline-none" />
                    <span class="absolute inset-y-0 right-2 grid w-8 place-content-center">
                        <button type="button" aria-label="Submit"
                            class="rounded-full p-1.5 transition-colors dark:text-gray-200">
                            <img :src="searchLogo" alt="search" />
                        </button>
                    </span>
                </div>
            </div>

            <div class="flex justify-between items-center space-x-10">
                <div class="flex justify-center items-center space-x-8">
                    <img :src="plusCircleOutlineLogo" alt="plus" class="cursor-pointer" />
                    <img :src="alertCircleOutlineLogo" alt="alert" class="cursor-pointer" />
                    <img :src="bellOutlineLogo" alt="bell" class="cursor-pointer" />
                </div>
                <img src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar"
                    class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center cursor-pointer" />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import trelloLogo from "@/assets/icon/Logo.jpg"
import boardLogo from "@/assets/icon/trello-mark-blue.jpg"
import searchLogo from "@/assets/icon/search-outline.jpg"
import plusCircleOutlineLogo from "@/assets/icon/plus-circle-outline.jpg"
import alertCircleOutlineLogo from "@/assets/icon/alert-circle-outline.jpg"
import bellOutlineLogo from "@/assets/icon/bell-outline.jpg"
</script>