<template>
    <div class="header-container">
        <div class="header-container__form-dancer">
            <img src="@/assets/Frame949.svg" alt="Дансер Лого" />
            <img src="@/assets/Union.svg" alt="Дансер название" />
            <img class="last" src="@/assets/Frame4731.svg" alt="Кнопки навигации" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .header-container__form-dancer {
        display: flex;
        align-items: center;
        padding: 0 16px 0 0;
        background: white;
    }

    .last {
        margin-left: auto;
    }
</style>