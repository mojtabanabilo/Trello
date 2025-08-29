<template>
    <div class="p-6 flex justify-between items-center">
        <div class="flex items-center space-x-20">
            <p class="text-3xl font-medium">Brackets</p>
            <div class="flex items-center space-x-5">
                <img :src="heartIcon" alt="heart" />
                <splitter />
                <div class="flex items-center space-x-3">
                    <img :src="globe2OutlineIcon" alt="global" />
                    <p class="text-gray-400">Public</p>
                </div>
                <splitter />
                <img :src="hardIcon" alt="hard" />
            </div>
        </div>

        <div class="flex items-center space-x-15">
            <div class="flex -space-x-4">
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="">
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="">
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="">
                <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=4" alt="">
                <div
                    class="w-10 h-10 flex items-center justify-center text-sm font-medium text-white bg-black rounded-full border-2 border-white">
                    +44
                </div>
            </div>
            <p class="text-xl font-medium">Menu</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import heartIcon from "@/assets/icon/Heart.jpg"
import globe2OutlineIcon from "@/assets/icon/globe-2-outline.jpg"
import hardIcon from "@/assets/icon/Hard.jpg"
</script>