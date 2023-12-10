<template>
    <div class="songs">
        <div class="container-fluid pt-5">
            <div class="row pt-5">
                <div class="col pt-5 d-flex justify-content-center">
                    <div class="card p-2" style="width: 50rem;">
                        <img src="@/assets/images/wwimf.jpeg" class="card-img" alt="...">
                        <div class="card-body text-center">
                            <h2>What Was I Made For?</h2>
                            <h3>Billie Eilish</h3>
                            <div class="col-sm-12 col-sm-offset-2">
                                <audio
                                src="@/assets/songs/wwimf.mp3"
                                controls
                                class="audio my-3"
                                ></audio>
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
}
</style>