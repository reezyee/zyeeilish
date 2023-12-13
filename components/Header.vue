<template>
    <nav class="navbar navbar-expand position-fixed z-1">
        <div class="container-fluid">
        <div class="navbar-brand d-flex flex-direction-col align-items-center">
            <img src="@/assets/images/logo.png" class="mx-3" alt="Logo" style="width: 20px;">
            <p class="fs-2 fw-bold m-1 text">Zyeeilish</p>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
            <li class="nav-item">
            <NuxtLink class="nav-link text" aria-current="page" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
            <NuxtLink class="nav-link text" aria-current="page" to="/bio">Bio</NuxtLink>
            </li>
            <li class="nav-item">
            <NuxtLink class="nav-link text" aria-current="page" to="contact">Contact</NuxtLink>
            </li>
        </ul>
        </div>
        </div>
    </nav>
</template>

<style scoped>

.navbar {
    width: 100%;
    background-color: rgba(28, 28, 28, 0.8);
    box-shadow: 0px 2px 10px rgb(34, 34, 34);
}
.text {
    color: rgb(190, 190, 190);
}
</style>