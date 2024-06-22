<template>
    <div class="bg-[#303030] pt-16">
        <NuxtLink to="/">
                <button type="button"
                    class="ms-10 w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </button>
                <!-- <span></span> -->
            </NuxtLink>
        <div class="text-gray-300 min-h-screen px-10 py-5">
            <!-- header -->
            <div class="flex">
                <img class="mr-6 w-96"
                    src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/hmhas.jpg">
                <div class="flex flex-col justify-center">
                    <!-- content -->
                    <h4 class="mt-0 mb-2 uppercase text-gray-200/50 tracking-widest text-xl">Albums</h4>
                    <h1 class="mt-0 mb-2 text-white text-4xl text-bold">HIT ME HARD AND SOFT</h1>

                    <p class="mb-2 text-sm text-semibold">Billie Eilish, Finneas</p>
                    <p class="text-gray-200/50 text-sm">Created by <a>Reezyee</a> - 50 songs, 3 hr 2 min</p>
                </div>
            </div>

            <!-- action buttons -->
            <div class="mt-6 flex justify-between">
                <div class="flex">
                    <button class="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">Play</button>
                </div>
            </div>

            <!-- song list   -->
            <div class="mt-10">
                <!-- song list header -->
                <div class="flex text-gray-200/50">
                    <!-- <div class="p-2 w-8 flex-shrink-0"></div>
                <div class="p-2 w-8 flex-shrink-0"></div> -->
                    <div class="p-2 w-full">Title</div>
                    <div class="p-2 w-full">Artist</div>
                    <div class="p-2 w-full">Album</div>
                    <!-- <div class="p-2 w-12 flex-shrink-0 text-right">⏱</div> -->
                </div>
                <div v-for="(song, i) in songs" :key="i" class="">
                    <NuxtLink :to="`/hmhas/${song.id}`" class="no-underline">
                        <div class="flex border-b border-gray-800 hover:bg-gray-800">
                            <!-- <div class="p-3 w-8 flex-shrink-0">▶️</div>
                        <div class="p-3 w-8 flex-shrink-0">❤️</div> -->
                            <div class="p-3 w-full">{{ song.judul }}</div>
                            <div class="p-3 w-full">{{ song.penyanyi }}</div>
                            <div class="p-3 w-full">{{ song.albums?.judul }}</div>
                            <!-- <div class="p-3 w-12 flex-shrink-0 text-right">{{ song.lagu }}</div> -->
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const songs = ref([])

async function getSongs() {
    const { data, error } = await supabase.from('songs')
        .select(`*, albums(*)`)
        .order('id')
    if (data) songs.value = data
}


onMounted(() => {
    getSongs()
})
</script>

<style scoped></style>