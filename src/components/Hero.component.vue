

<template>
    <div class="hero-section">
        <div class="px-4 py-3 my-3 text-center">
            <h1 class="display-5 fw-bold">Vous méritez un sourire éclatant</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Notre centre professionnel de blanchiment dentaire vous accueille
                    tous les jours de la semaine de 7h à 16h.</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-lg px-4 cta">Je Réserve</button>
                    <button type="button" class="btn secondary-btn btn-lg px-4">Contact</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.hero-section {
    /* Creating an overlay */
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../assets/smile-hero.jpg');
    background-size: cover;
    background-position: center;
    padding: 200px 0;
    color: #fff;
    width: 100%;
}

@media (max-width: 768px) {
    .cta {
        margin-bottom: 10px;
    }
}
</style>