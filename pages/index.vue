<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row py-5">
                <h1 class="text-center fs-1 mt-5">Greetings to you!! </h1>
                <p class="text-center">This site is full of stories about Billie Eilish who is a famous pop singer.</p>
                <p class="text-center">here we've some <i>Songs</i>, <i>Quotes</i> from Billie, I hope you like them. </p>
            </div>
            <div class="row">
                <h2 class="text-center">Quotes from Billie</h2>
            </div>
            <div class="row d-flex flex-wrap">
                <div class="col m-5">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/images/a.jpg" class="card-img-top" alt="...">
                        <div class="card-body text">
                            <q class="card-text fw-semibold ">Words are more powerful than some noises. Noises won't last long. Lyrics are so important, and people don't realise that.</q>                       
                            <p class="text-end fst-italic">Billie Eilish</p>
                        </div>
                    </div>
                </div>
                <div class="col m-5">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/images/b.jpg" class="card-img-top" alt="...">
                        <div class="card-body text">
                            <q class="card-text fw-semibold">Sometimes it’s flattering when people copy you, but sometimes it gets to a breaking point.</q>                       
                            <p class="text-end fst-italic">Billie Eilish</p>
                        </div>
                    </div>
                </div>
                <div class="col m-5">
                    <div class="card" style="width: 18rem;">
                        <img src="@/assets/images/c.jpeg" class="card-img-top" alt="...">
                        <div class="card-body text">
                            <q class="card-text fw-semibold">I'm gonna make what I want to make, and other people are gonna like what they're gonna like. It doesn't really matter.</q>                       
                            <p class="text-end fst-italic">Billie Eilish</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <h2 class="text-center">Songs</h2>
                <div class="row">
                    <div class="col">
                        <div class="card card-inverse" style="width: 100%;">
                            <ul class="list-group list-group-flush">
                            <li class="card list-group-item text">
                                <div class="row g-0">
                                    <div class="col-md-1 d-flex justify-content-center">
                                    <img src="@/assets/images/wwimf.jpeg" class="img-fluid rounded-start " alt="...">
                                    </div>
                                    <div class="col">
                                    <div class="card-body ">
                                        <h5 class="card-title">What Was I Made For?</h5>
                                        <p class="card-text">Billie Eilish</p>
                                    </div>
                                    </div>
                                    <div class="col-md-1 d-flex justify-content-center align-items-center">
                                        <NuxtLink to="/wwimf" class="fs-2 text-decoration-none nav-link">></NuxtLink>    
                                    </div>
                                </div>
                            </li>
                            <li class="card list-group-item text">
                                <div class="row g-0">
                                    <div class="col-md-1 d-flex justify-content-center">
                                    <img src="@/assets/images/wwimf.jpeg" class="img-fluid rounded-start " alt="...">
                                    </div>
                                    <div class="col">
                                    <div class="card-body">
                                        <h5 class="card-title">What Was I Made For?</h5>
                                        <p class="card-text">Billie Eilish</p>
                                    </div>
                                    </div>
                                    <div class="col-md-1 d-flex justify-content-center align-items-center">
                                        <NuxtLink to="/wwimf" class="fs-2 text-decoration-none nav-link">></NuxtLink>    
                                    </div>
                                </div>
                            </li>
                            <li class="card list-group-item text">
                                <div class="row g-0">
                                    <div class="col-md-1 d-flex justify-content-center">
                                    <img src="@/assets/images/wwimf.jpeg" class="img-fluid rounded-start " alt="...">
                                    </div>
                                    <div class="col">
                                    <div class="card-body">
                                        <h5 class="card-title">What Was I Made For?</h5>
                                        <p class="card-text">Billie Eilish</p>
                                    </div>
                                    </div>
                                    <div class="col-md-1 d-flex justify-content-center align-items-center">
                                        <NuxtLink to="/wwimf" class="fs-2 text-decoration-none nav-link">></NuxtLink>    
                                    </div>
                                </div>
                            </li>
                            </ul>
                        <div class="card-footer">
                        Card footer
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container-fluid{
  background-color: rgba(0, 0, 0, 0.95) ;
  color: rgba(225, 225, 225, 0.9);
}
.card {
    background-color: rgb(28,28,28, 0.8);
}
.text{
    color: rgba(225, 225, 225, 0.9);}
</style>