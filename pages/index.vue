<template>
    <div class="content">
        <div class="intro bg-no-repeat bg-cover bg-fixed bg-center">
            <div class="flex flex-col justify-center items-center content-center pt-72 lg:pb-0 md:pb-40 sm:pb-38 pb-48">
                <!-- <p>WELCOME</p> -->
                <p
                    class="animate-text bg-clip-text text-transparent bg-gradient-to-r from-gray-700/10 via-[#4d87dc] to-gray-700/30 lg:text-9xl md:text-8xl text-6xl font-oswald font-extrabold lg:tracking-[-10.5px] md:tracking-[-8px] sm:tracking-[-5px] tracking-[-4.5px]">
                    ZYEEILISH
                </p>
                <p class="subtext-anim text-slate-100/40 tracking-[4px] font-oswald">Bravo, you're proper Billie Eilish
                    fans</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#303030" fill-opacity="1"
                    d="M0,160L20,176C40,192,80,224,120,245.3C160,267,200,277,240,277.3C280,277,320,267,360,234.7C400,203,440,299,480,250.7C520,228,560,260,600,260C640,260,680,190,720,240.3C760,317,800,217,840,204.7C880,192,920,256,960,250.7C1000,245,1040,221,1080,260C1120,300,1160,203,1200,202.7C1240,203,1280,249,1320,190.7C1360,128,1400,160,1420,176L1440,192L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">
                </path>
            </svg>
        </div>
        <div id="about">
            <div
                class="flex lg:flex-row md:flex-col flex-col justify-center items-center lg:py-32  md:py-16 sm:py-16 pt-10 px-10 gap-8 bg-[#303030] text-slate-100">
                <div class="text grid lg:gap-10 gap-3 font-oswald">
                    <p class="text-center text-4xl font-extrabold">About</p>
                    <p class="tracking-[1px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In deleniti
                        iusto
                        consequuntur, nemo
                        labore, totam soluta doloremque laborum reprehenderit voluptatum, maiores nihil? Omnis dolorum
                        beatae, fugiat nam alias corporis consequuntur.</p>
                </div>
                <div
                    class="group h-80 lg:w-[1000px] lg:h-[500px] md:h-[480px] md:w-[500px] sm:w-[400px] sm:h-[400px] w-[300px] [perspective:1000px] pb-10">
                    <div
                        class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div class="absolute inset-0">
                            <img class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
                                src="~/assets/images/pf.jpeg" alt="">
                        </div>
                        <div
                            class="absolute inset-0 h-ful w-full rounded-xl bg-black/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div
                                class="flex flex-col lg:mt-24 items-center content-center justify-center font-oswald tracking-[1px] text-wrap gap-2">
                                <p>Billie Eilish Pirate Baird O'Connell</p>
                                <p>Singer ● Songwriter ● Actor</p>
                                <p>December 18, 2001 (age 22) <br>
                                    Los Angeles, California, U.S.</p>
                                <a href="http://www.billieeilish.com" class="underline">billieeilish.com</a>
                                <button
                                    class="px-5 py-2 text-sm text-gray-700 transition-colors duration-200 rounded-lg gap-x-2 dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100/10 dark:text-gray-200 shadow-sm shadow-black"><a
                                        href="https://en.wikipedia.org/wiki/Billie_Eilish">details</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="albums" class="albums bg-no-repeat bg-cover bg-fixed bg-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#303030" fill-opacity="1"
                    d="M0,96L18.5,80C36.9,64,74,32,111,53.3C147.7,75,115,110,222,110.7C300.5,120,255,170,332,128C369.2,110,406,64,443,64C480,64,517,96,554,128C590.8,160,628,92,665,91.3C701.5,91,738,117,775,90.7C812.3,64,849,64,886,90.7C923.1,117,960,171,997,117.3C1033.8,28,1071,124,1108,102.7C1144.6,81,1182,239,1218,162.7C1255.4,107,1292,157,1329,137.3C1366.2,111,1403,187,1422,191.3L3907,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z">
                </path>
            </svg>
            <p class="judul-album text-5xl text-center pb-5 font-oswald font-black text-slate-100">Albums</p>
            <div
                class="flex font-oswald flex-wrap flex-row justify-center items-center content-center gap-10 pb-40 px-8 animation-all duration-300 data-twe-animation-delay">
                <!-- <div v-for="(album, i) in albums" :key="i" class=""> -->
                <NuxtLink to="/hmhas/">
                    <div
                        class="album lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-slate-600/60">
                        <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/hmhas.jpg"
                            class=" rounded-2xl group-hover:scale-105 duration-300" />
                        <div
                            class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-zinc-100/10 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-slate-200/70 ">
                            <p class="lg:text-xl md:text-lg sm:text-md text-sm">HIT ME HARD AND SOFT</p>
                        </div>
                    </div>
                </NuxtLink>
                <!-- </div> -->
                <NuxtLink to="/guitar/">
                    <div
                        class="album lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-green-400/40">
                        <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/guitar.jpg"
                            class=" rounded-2xl group-hover:scale-105 duration-300" />
                        <div
                            class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-green-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-slate-200/70">
                            <p class="lg:text-xl md:text-lg sm:text-md text-sm">Guitar Songs</p>
                        </div>
                    </div>
                </NuxtLink>
                <NuxtLink to="/hte/">
                    <div
                        class="album lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-orange-400/40">
                        <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/hte.jpg"
                            class=" rounded-2xl group-hover:scale-105 duration-300" />
                        <div
                            class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-orange-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-slate-200/70">
                            <p class="lg:text-xl md:text-lg sm:text-md text-sm">Happier Than Ever</p>
                        </div>
                    </div>
                </NuxtLink>
                <div
                    class="album lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-slate-400/40">
                    <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/wwafa.jpg"
                        class=" rounded-2xl group-hover:scale-105 duration-300" />
                    <div
                        class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-slate-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-l bg-black/30 text-slate-200/70">
                        <p class="lg:text-xl md:text-lg sm:text-md text-sm">When We All Fall Asleep, Where Do We Go?</p>
                    </div>
                </div>
                <div
                    class="album lg:w-64 md:w-48 sm:w-38 w-28 relative group rounded-2xl shadow-lg shadow-yellow-400/40">
                    <img src="https://yfpzsnvyrqerpascezct.supabase.co/storage/v1/object/public/cover/dsam.jpg"
                        class=" rounded-2xl group-hover:scale-105 duration-300" />
                    <div
                        class="opacity-0 group-hover:opacity-100 group-hover:scale-105 duration-300 rounded-2xl shadow-lg shadow-yellow-400/40 absolute h-full w-full bottom-0 flex justify-center items-end text-xl bg-black/30 text-slate-200/70">
                        <p class="lg:text-xl md:text-lg sm:text-md text-sm">Don't Smile At Me</p>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#303030" fill-opacity="1"
                    d="M0,256L14.1,250.7C28.2,245,56,235,85,234.7C112.9,235,141,245,169,240C197.6,235,226,213,254,197.3C282.4,181,311,171,339,181.3C367.1,192,395,224,424,224C451.8,224,480,192,508,186.7C536.5,181,565,203,593,213.3C621.2,224,649,224,678,202.7C705.9,181,734,139,762,138.7C790.6,139,819,181,847,181.3C875.3,181,904,139,932,117.3C960,96,988,96,1016,122.7C1044.7,149,1073,203,1101,213.3C1129.4,224,1158,192,1186,197.3C1214.1,203,1242,245,1271,245.3C1298.8,245,1327,203,1355,181.3C1383.5,160,1412,160,1426,160L1440,160L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z">
                </path>
            </svg>
            <div id="photos"
                class="photos flex lg:flex-row md:flex-col flex-col justify-center content-center items-center lg:py-32  md:py-16 sm:py-16 pt-10 px-10 gap-8 bg-[#303030] text-slate-100">
                <div class="carousel m-0 rounded-box max-w-[400px] max-h-[500px]">
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/01.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/02.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/03.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/04.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/05.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/06.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/07.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/08.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/09.jpeg" />
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/images/slidePhoto/10.jpeg" />
                    </div>
                </div>
                <div class="Achievments hidden lg:block">
                    <h1 class="text-5xl text-center pb-5 font-oswald font-black text-slate-100">Awards</h1>
                    <table class="table-auto border-x border-sky-700">
                        <thead>
                            <tr class="text-xl bg-sky-700" >
                                <th >Award Ceremory</th>
                                <th >Category</th>
                                <th >Work</th>
                                <th >Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Record and Song of the Year</td>
                                <td>Bad Guy</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Record of the Year</td>
                                <td>Everything I Wanted</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>MTV Video Music Awards</td>
                                <td>Song of the Year</td>
                                <td>Happier Than Ever</td>
                                <td>2022</td>
                            </tr>
                            <tr>
                                <td>Academy Awards</td>
                                <td>Best Original Song</td>
                                <td>No Time To Die</td>
                                <td>2022</td>
                            </tr>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Best Song Written for Visual Media</td>
                                <td>No Time To Die</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>Academy Awards</td>
                                <td>Best Original Song</td>
                                <td>What Was I Made For?</td>
                                <td>2024</td>
                            </tr>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Song of the Year</td>
                                <td>What Was I Made For?</td>
                                <td>2024</td>
                            </tr>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Best Song Written for Visual Media</td>
                                <td>What Was I Made For?</td>
                                <td>2024</td>
                            </tr>
                            <tr>
                                <td>Apple Music Awards</td>
                                <td>Global Artist of the Year</td>
                                <td>Billie Eilish</td>
                                <td>2019</td>
                            </tr>
                            <tr>
                                <td>Billboard Music Awards</td>
                                <td>Top New Music</td>
                                <td>Billie Eilish</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Best New Music</td>
                                <td>Billie Eilish</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Apple Music Awards</td>
                                <td>Album of the Year</td>
                                <td>When We All Fall Asleep, Where Do We Go?</td>
                                <td>2019</td>
                            </tr>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Album of the Year</td>
                                <td>When We All Fall Asleep, Where Do We Go?</td>
                                <td>2020</td>
                            </tr>
                            <tr>
                                <td>Grammy Awards</td>
                                <td>Best Pop Vocal Album</td>
                                <td>When We All Fall Asleep, Where Do We Go?</td>
                                <td>2020</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr class="text-md bg-sky-700" >
                                <th></th>
                                <th></th>
                                <th></th>
                                <th><a href="https://en.wikipedia.org/wiki/List_of_awards_and_nominations_received_by_Billie_Eilish">All Awards</a></th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// const { $gsap, $ScrollTrigger } = useNuxtApp()

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)

// const supabase = useSupabaseClient()

// const albums = ref([])

// async function getalbums() {
//     const { data, error } = await supabase.from('albums')
//         .select('*')
//         .order('id')
//     if (data) albums.value = data
// }

onMounted(() => {
    const tl = gsap.timeline()
    let st = gsap.timeline({
        scrollTrigger: {
            start: 'center center',
            end: '60% 60%',
            // scrub: 3,
            // markers: true,
        }
    })

    tl
        .from(".animate-text", {
            opacity: 0,
            duration: 2.5
        })
        .from(".subtext-anim", {
            opacity: 0,
            scale: 0,
            duration: 1
        })

    st
        .from(".judul-album", {
            opacity: 0,
            delay: 0.2,
            duration: 1
        })
        .from(".album", {
            opacity: 0,
            stagger: 0.2,
            delay: 0.2,
            ease: "sine.in",
            duration: 1
        })

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})
</script>

<style scoped>
.intro {
    background-image: url('@/assets/images/home.jpg');
    /* height: 100svh; */
}

.albums {
    background-image: url("@/assets/images/albums.jpg");
    /* height: 100vh; */
}

.carousel-item {
    width: 400px;
    height: 500px;
}

td {
    border-left: 1px solid #2d679c;
}
th, td{
    padding: 0 2.2em;
    text-align: center;
}
</style>