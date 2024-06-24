<template>
    <div class="albums pt-16 bg-[linear-gradient(0deg,_#020b05_55%,_#1a3e0c_100%)] font-oswald">
        <NuxtLink to="/" class="ms-10">
            <button type="button"
                class="px-5 py-2 text-sm text-gray-700 transition-colors duration-200 rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100/10 dark:text-gray-200 shadow-sm shadow-black">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 29 24"
                    stroke-width="1.5" stroke="green">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </button>
            <!-- <span></span> -->
        </NuxtLink>
        <div class="text-gray-300 min-h-screen px-10 py-5">
            <!-- header -->
            <div class="flex lg:flex-row md:flex-row sm:flex-col flex-col">
                <img class="mr-6 lg:w-96 lg:h-96 md:w-80 md:h-80 sm:w-72 sm:h-72 w-52 h-52 rounded-2xl shadow-inner shadow-black hover:opacity-100 hover:scale-105 duration-300"
                    src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/guitar.jpg">
                <div class="flex flex-col justify-center">
                    <!-- content -->
                    <h4 class="mt-0 mb-2 uppercase text-gray-200/50 tracking-widest text-xl">Albums</h4>
                    <h1 class="mt-0 mb-2 text-white lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-black tracking-[0.5px]">Guitar Songs</h1>
                    <p class="mb-2 text-sm font-semibold">Billie Eilish by Finneas</p>
                    <p class="text-gray-200/50 text-sm">Created by <a>Reezyee</a> - 10 songs, 1 hr 2 min</p>
                </div>
            </div>

            <!-- action buttons -->
            <!-- <div class="mt-6 flex justify-between">
                <div class="flex">
                    <button class="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Play</button>
                </div>
            </div> -->

            <!-- song list   -->
            <div class="mt-10">
                <!-- song list header -->
                <div class="flex text-gray-200/50 items-center font-semibold">
                    <!-- <div class="p-2 w-8 flex-shrink-0"></div> -->
                    <div class="p-2 w-full">Title</div>
                    <div class="p-2 w-20 flex-shrink-0"></div>
                    <div class="p-2 w-full">Artist</div>
                    <!-- <div class="p-2 w-full">Album</div> -->
                    <!-- <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div> -->
                </div>
                <div v-for="(song, i) in songs" :key="i" class="">
                    <NuxtLink :to="`/guitar/${song.id}`" class="no-underline">
                        <div class="flex border-b border-gray-800 hover:bg-blue-300/10 items-center">
                            <!-- <div class="p-3 w-8 flex-shrink-0">▶️</div> -->
                            <img :src="song.cover" alt="" class="p-3 lg:w-20 md:w-18 sm:w-16 w-20 h-20 flex-shrink-0">
                            <div class="p-3 w-full font-bold">{{ song.judul }}</div>
                            <div class="p-3 w-full font-semibold">{{ song.penyanyi }}</div>
                            <!-- <div class="p-3 w-full">{{ song.albums?.judul }}</div> -->
                            <!-- <div class="p-3 w-12 flex-shrink-0 text-right">{{ song.lagu }}</div> -->
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { useRoute } from 'vue-router';

const supabase = useSupabaseClient()

// const route = useRoute()
const songs = ref([])

async function getSongs() {
    const { data, error } = await supabase.from('guitar')
        .select(`*, albums(*)`)
        .order('id')
    // .eq('id', route.params.id)
    // .maybeSingle()
    if (data) songs.value = data
}


onMounted(() => {
    getSongs()
})
</script>

<style scoped>

</style>
