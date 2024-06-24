<template>
    <div class="songs pt-16 pb-[50px] bg-[linear-gradient(0deg,_#131003_30%,_#624835_70%,_#886648_90%)] font-oswald text-slate-100">
        <NuxtLink to="/hte/" class="ms-10">
            <button type="button"
                class="px-5 py-2 text-sm text-gray-700 transition-colors duration-200 rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100/10 dark:text-gray-200 shadow-sm shadow-black">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="green">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <!-- <span></span> -->
            </button>
        </NuxtLink>
        <div
            class="content flex lg:flex-row md:flex-row sm:flex-col flex-col items-center justify-center lg:gap-20 md:gap-18 sm:gap-5 pt-5 gap-5 content-center pb-9 px-10 ">
            <div class="flex flex-col gap-1">
                <img :src="songs?.cover" :alt="songs?.judul" class="w-96 shadow-md shadow-black rounded-xl">
                <p class="text-3xl font-bold pt-3 tracking-wide">{{ songs?.judul }}</p>
                <p class="text-gray-200/40 text-x font-semibold">{{ songs?.penyanyi }}</p>
                <!-- <audio id="song" class="block w-full max-w-md mx-auto" controls>
                    <source :src="songs?.lagu" type="audio/mpeg">
                </audio> -->
                <audio :src="songs?.lagu" class="block w-full max-w-md mx-auto border-2 border-[#775840] shadow-md shadow-black" type="audio/mpeg" controls></audio>
            </div>
            <div class="lyrics">
                <div
                    class="card lg:w-[600px] lg:h-[520px] md:w-[400px] md:h-[520px] sm:h-[400px] h-[400px] bg-transparent shadow-md shadow-black">
                    <div class="card-body overflow-inside overflow-y-auto">
                        <!-- <div class="card-actions justify-end">
                            <button class="btn btn-square btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div> -->
                        <pre class="text-center text-wrap font-oswald text-xl tracking-[1px] font-semibold leading-loose">{{ songs?.lirik }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// import { onMounted } from 'vue';

const supabase = useSupabaseClient()

const route = useRoute()
const songs = ref()

async function getSongById() {
    const { data, error } = await supabase.from('hte')
        .select(`*, albums(*)`)
        .eq('id', route.params.id)
        .maybeSingle()
    if (data) songs.value = data
}

onMounted(() => {
    getSongById()
})
</script>

<style scoped>
audio::-webkit-media-controls-panel {
    /* background: linear-gradient(360deg, #080e15, #13355f); */
    background-color: #775840;
    /* box-shadow: 1px 100px 4px 1px #13355f inset; */
}

audio {
    /* width: 100%; */
    border-radius: 100px;
    /* max-width: 400px; */
    margin: 0 auto;
    
}

</style>