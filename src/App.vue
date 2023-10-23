<template>
    <div class="app-container">
        <HeaderComponent />
        <div class="app-wrapper">
            <div class="showPhoneNumberForm" v-if="showPhoneNumberForm">
                <LoginForm @custom-event="showAccount" />
            </div>
            <div v-if="showAccountForm">
                <AccountLoginForm @custom-event="showCheck" />
            </div>
            <div v-if="showCheckPhoneForm">
                <CheckNumberPhoneForm  @custom-event="showAccess" />
            </div>
            <div v-if="showAccessPhoneForm">
                <AccessPhoneNumberForm />
            </div>
        </div>
    </div>


</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import LoginForm from "@/components/LoginForm";
import AccountLoginForm from "@/components/AccountLoginForm";
import CheckNumberPhoneForm from "@/components/CheckNumberPhoneForm";
import AccessPhoneNumberForm from "@/components/AccessPhoneNumberForm";

export default {
    components: {
        HeaderComponent, LoginForm, AccountLoginForm,CheckNumberPhoneForm, AccessPhoneNumberForm
    },
    name: 'App',
    data() {
        return {
            showPhoneNumberForm: true,
            showAccountForm: false,
            showCheckPhoneForm: false,
            showAccessPhoneForm: false,
            accountPhone: '+7-999-999-99-99',
        };
    },
    methods: {
        showAccount(data) {
            this.showPhoneNumberForm = data;
            this.showAccountForm = true;
        },
        showCheck(data) {
            this.showAccountForm = data;
            this.showCheckPhoneForm = true;
        },
        showAccess(data) {
            this.showCheckPhoneForm = data;
            this.showAccessPhoneForm = true;
        }
    }
};
</script>

<style scoped>
    .app-container {
        height: 100vh;
    }

    .app-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F2F3F7;
        height: 100%;
    }
</style>
