<template>
    <div class="content">
        <div class="intro bg-no-repeat bg-cover bg-fixed bg-center">
            <div class="flex flex-col justify-center items-center content-center pt-72 lg:pb-0 md:pb-40 sm:pb-38 pb-48">
                <!-- <p>WELCOME</p> -->
                <p
                    class="animate-text bg-clip-text text-transparent bg-gradient-to-r from-gray-800/30 via-green-600/80 to-gray-800/30 lg:text-9xl md:text-8xl text-6xl font-black">
                    ZYEEILISH
                </p>    
                <p>Bravo, you're proper Billie Eilish fans</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#303030" fill-opacity="1"
                    d="M0,160L20,176C40,192,80,224,120,245.3C160,267,200,277,240,277.3C280,277,320,267,360,234.7C400,203,440,299,480,250.7C520,228,560,260,600,260C640,260,680,190,720,240.3C760,317,800,217,840,204.7C880,192,920,256,960,250.7C1000,245,1040,221,1080,260C1120,300,1160,203,1200,202.7C1240,203,1280,249,1320,190.7C1360,128,1400,160,1420,176L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">
                </path>
            </svg>
        </div>
        <div class="about">
            <div
                class="flex lg:flex-row md:flex-col flex-col justify-center items-center lg:py-32  md:py-16 sm:py-16 pt-10 px-10 gap-8 bg-[#303030]">
                <div class="text grid lg:gap-10 gap-3">
                    <p class="text-center text-6xl">About</p>
                    <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In deleniti iusto
                        consequuntur, nemo
                        labore, totam soluta doloremque laborum reprehenderit voluptatum, maiores nihil? Omnis dolorum
                        beatae, fugiat nam alias corporis consequuntur.</p>
                </div>
                <div
                    class="group h-72 lg:w-[1000px] lg:h-[500px] md:h-[480px] md:w-[500px] sm:w-[400px] sm:h-[400px] w-[300px] [perspective:1000px] pb-10">
                    <div
                        class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div class="absolute inset-0">
                            <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                                src="~/assets/images/d.jpg" alt="">
                        </div>
                        <div
                            class="absolute inset-0 h-ful w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div class="flex flex-col mt-40 items-center content-center justify-center">
                                <p>Billie Eilish</p>
                                <p>21 Years Old</p>
                                <p>Artists</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="album bg-no-repeat bg-cover bg-fixed bg-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#303030" fill-opacity="1"
                    d="M0,96L18.5,80C36.9,64,74,32,111,53.3C147.7,75,115,110,222,110.7C300.5,120,255,170,332,128C369.2,110,406,64,443,64C480,64,517,96,554,128C590.8,160,628,92,665,91.3C701.5,91,738,117,775,90.7C812.3,64,849,64,886,90.7C923.1,117,960,171,997,117.3C1033.8,28,1071,124,1108,102.7C1144.6,81,1182,239,1218,162.7C1255.4,107,1292,157,1329,137.3C1366.2,111,1403,187,1422,191.3L3907,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z">
                </path>
            </svg>
            <p class="text-7xl text-center pb-5">Albums</p>
            <div class="flex flex-wrap flex-row justify-center items-center content-center gap-10 pb-40 px-8 animation-all duration-300 data-twe-animation-delay">
                <!-- <div v-for="(album, i) in albums" :key="i" class=""> -->
                <NuxtLink to="/hmhas/">
                    <div class="lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-slate-600/60">
                        <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/hmhas.jpg" class=" rounded-2xl group-hover:scale-105 duration-300" />
                        <div
                            class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-zinc-100/10 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-white ">
                            <p class="lg:text-xl md:text-lg sm:text-md text-sm">HIT ME HARD AND SOFT</p></div>
                    </div>
                </NuxtLink>
                <!-- </div> -->
                <div class="lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-green-400/40">
                    <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/guitar.jpg"
                        class=" rounded-2xl group-hover:scale-105 duration-300" />
                    <div
                        class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-green-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-white ">
                        <p class="lg:text-xl md:text-lg sm:text-md text-sm">Guitar Songs</p></div>
                </div>
                <div class="lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-orange-400/40">
                    <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/hte.jpg"
                        class=" rounded-2xl group-hover:scale-105 duration-300" />
                    <div
                        class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-orange-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-white ">
                        <p class="lg:text-xl md:text-lg sm:text-md text-sm">Happier Than Ever</p></div>
                </div>
                <div class="lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-slate-400/40">
                    <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/wwafa.jpg"
                        class=" rounded-2xl group-hover:scale-105 duration-300" />
                    <div
                        class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-slate-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-l bg-black/30 text-white ">
                       <p class="lg:text-xl md:text-lg sm:text-md text-sm">When We All Fall Asleep, Where Do We Go?</p></div>
                </div>
                <div class="lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-yellow-400/40">
                    <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/dsam.jpg"
                        class=" rounded-2xl group-hover:scale-105 duration-300" />
                    <div
                        class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-yellow-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-white ">
                        <p class="lg:text-xl md:text-lg sm:text-md text-sm">Don't Smile At Me</p></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// const supabase = useSupabaseClient()

// const albums = ref([])

// async function getalbums() {
//     const { data, error } = await supabase.from('albums')
//         .select('*')
//         .order('id')
//     if (data) albums.value = data
// }

// onMounted(() => {
//     getalbums()
// })
</script>

<style scoped>
.intro {
    background-image: url('@/assets/images/home.jpg');
    /* height: 100vh; */
}

.album {
    background-image: url("@/assets/images/albums.jpg");
    /* height: 100vh; */
}
</style>