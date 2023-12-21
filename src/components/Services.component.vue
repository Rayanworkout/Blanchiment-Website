
<script setup lang="ts">
import GoodReasons from './small/GoodReasons.component.vue'
</script>

<template>
    <section class="services-section py-5">
        <GoodReasons />
        <div class="py-5 my-5">
            <div class="d-flex justify-content-around align-items-center items">
                <div class="elem">
                    <img src="../assets/s3.png.webp" alt="logo loupe sur dent">
                    <p class="mt-1">Blanchiment Dentaire</p>
                </div>
                <div class="elem">
                    <img src="../assets/s2.png.webp" alt="logo loupe sur dent">
                    <p class="mt-1">Détection de pathologies</p>
                </div>
                <div class="elem">
                    <img src="../assets/s5.png.webp" alt="logo loupe sur dent">
                    <p class="mt-1">Examination dentaire</p>
                </div>
            </div>
            <div style="height: 1000px;"></div>
        </div>

    </section>
</template>



<style scoped>
.services-section {
    /* Creating an overlay */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/smile-2.jpg');
    background-size: cover;
    background-position: top;
    padding: 200px 0;
    color: #fff;
    width: 100%;
    height: 600px;
}

.custom-border-bottom {
    width: 20%;
}

h1 {
    font-size: 3rem;
}

@media (max-width: 750px) {
    .items {
        flex-direction: column;
    }
    .elem {
        text-align: center;
    }
}

</style>