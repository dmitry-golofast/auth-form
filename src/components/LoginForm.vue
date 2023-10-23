<template>
    <div class="login-form">
        <div class="header">
            <p class="header__lk">Личный кабинет</p>
            <p class="header__phone">Вход с помощью телефона</p>
        </div>
        <form class="form">
            <div class="input-group">
                <input class="input-group__number" type="text" placeholder=" +7 и номер телефона" />
            </div>
            <button class="form__btn">Войти</button>
        </form>
        <div class="footer" @click="showFormSwitcher">
            <p class="footer__text">Вход по лицевому счету</p>
        </div>
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
    .login-form {
        width: 358px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        padding: 30px 16px 30px 16px;
    }

    .header__lk {
        font-size: 20px;
        color: #373653;
        font-weight: 700;
    }

    .header__phone {
        color: #626C77;
        font-size: 18px;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: left;
    }

    .form {
        display: flex;
        flex-direction: column;
    }

    .input-group__number,
    .form__btn {
        width: 100%;
        box-sizing: border-box;
        height: 44px;
        border-radius: 5px;
        border: 1px solid #919BA6;
        padding-left: 10px;
    }

    .form__btn {
        margin-top: 10px;
        padding: 8px;
        background: #373653;
        color: #FFFFFF;
        border: none;
        border-radius: 4px;
    }

    .footer__text {
        font-size: 18px;
        color: #626C77;
        text-align: center;
    }

    .footer__text:hover {
        color: burlywood;
        cursor: pointer;
    }

</style>
