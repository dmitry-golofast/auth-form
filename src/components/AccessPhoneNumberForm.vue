<template>
    <div class="number-form">
        <div class="header">
            <div class="form-check">
                <p class="header__phone-text">Номер телефона</p><img class="check" src="@/assets/Group4950.svg" alt="Чек" />
            </div>
            <p class="header__phone-number">+7 (***) *** 22-22</p>
            <p class="header__access">Потверждение номера</p>
            <p class="header__text">Мы отправили код на ваш номер<br>Введите его для подтверждения</p>
        </div>
        <form class="form">
            <div class="input-group">
                <input class="input-group__code" type="text" placeholder="0"/>
                <input class="input-group__code" type="text" placeholder="0"/>
                <input class="input-group__code" type="text" placeholder="0"/>
                <input class="input-group__code" type="text" placeholder="0"/>
                <input class="input-group__code" type="text" placeholder="0"/>
                <input class="input-group__code" type="text" placeholder="0"/>
            </div>
            <p class="footer__text">Не пришло SMS? повторная отправка возможна через <span class="seconds">30 сек</span></p>
            <button class="form__btn">Продолжить</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            showFormSwitcher() {
                this.$emit('custom-event', false)
            },
        }
    };
</script>

<style scoped>
    .number-form {
        width: 358px;
        padding: 30px 16px 30px 16px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;

    }

    .header__phone-text {
        font-size: 20px;
        font-weight: 700;
        color: #919BA6;
    }

    .header__phone-number {
        font-size: 14px;
        color: #919BA6;
    }

    .header__access {
        font-size: 20px;
        color: #373653;
        font-weight: 700;
    }

    .header__text {
        font-size: 14px;
        color: #626C77;
    }

    .form {
        display: flex;
        flex-direction: column;
    }

    .input-group {
        display: flex;
        justify-content: space-between;
    }

    .input-group__code {
        width: 39px;
        height: 56px;
        border-radius: 5px;
        border: 1px solid #919BA6;
        margin-right: 5px;
        text-align: center;
        font-size: 28px;
        color: #919BA6;
    }

    .form__btn {
        width: 100%;
        height: 42px;
        margin-top: 10px;
        padding: 8px;
        background: #373653;
        color: #FFFFFF;
        border: none;
        border-radius: 4px;

    }

    .footer__text {
        margin: 15px auto;
        width: 250px;
        font-size: 14px;
        color: #626C77;
        text-align: center;
    }

    .form-check {
        display: flex;
    }

    .check {
        margin-left: 10px;
    }

    .seconds {
        color: #00D622;
    }

</style>
