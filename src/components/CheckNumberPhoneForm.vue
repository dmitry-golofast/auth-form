<template>
    <div class="number-form">
        <div class="header">
            <p class="header__ask">Это ваш номер телефона?</p>
            <p class="header__text">В целях безопасности мы переводим всех абонентов Данцер на авторизацию с помощью номера телефона. В дальнейшем вы можете использовать его для входа</p>
        </div>
        <form class="form">
            <div class="input-group">
                <input class="input-group__number" type="text" value="+7 (***) *** 22-22" disabled />
            </div>
            <button class="form__btn" @click="showFormSwitcher">Да, это мой номер</button>
        </form>
        <div class="footer">
            <p class="footer__text">Нет, это не мой номер</p>
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
    .number-form {
        width: 358px;
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        padding: 30px 16px 30px 16px;
    }

    .header__ask {
        font-family: Montserrat;
        font-size: 20px;
        color: #373653;
        font-weight: 700;
    }

    .header__text {
        font-size: 18px;
        color: #626C77;
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

    .input-group__number {
        border: none;
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

    .form__btn:hover {
        cursor: pointer;
        background-color: burlywood;
    }


</style>
