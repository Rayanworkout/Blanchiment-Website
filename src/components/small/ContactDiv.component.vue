
<template>
    <div class="elem-containers">
        <div class="d-flex justify-content-start p-3 px-5">
            <a class="px-5" href="https://maps.app.goo.gl/vuQX2zN4fDbHBVK68" target="_blank"><i
                    class="bi bi-geo-alt-fill icon"></i> 150 avenue de l'ogre blanc 13013
                Marseille</a>
            <a href="mailto:email@examplecom"><i class="bi bi-envelope-at-fill icon"></i> email@email.fr</a>
        </div>
    </div>
</template>

<style scoped>
a {
    color: var(--text-color);
    text-decoration: none;
    font-size: small;
}

@media (max-width: 1000px) {
    .elem-containers {
        display: none;
    }
}
</style>