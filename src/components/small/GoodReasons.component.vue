

<template>
      <div class="py-3 d-flex justify-content-around align-items-center items text-center">
        <div>
            <i class="bi bi-calendar-heart icon"></i>
            <p class="display-6"><strong>3</strong></p>
            <p>ans d'expérience</p>
        </div>
        <div>
            <i class="bi bi-heart icon"></i>
            <p class="display-6"><strong>2000</strong></p>
            <p>Patients satisfaits</p>
        </div>
        <div>
            <i class="bi bi-book icon"></i>
            <p class="display-6"><strong>5</strong></p>
            <p>Certificats Professionnels</p>
        </div>
    </div>
</template>


<style scoped>

.icon {
    font-size: 50px;
}

@media (max-width: 750px) {
    .items {
        flex-direction: column;
    }
}

</style>