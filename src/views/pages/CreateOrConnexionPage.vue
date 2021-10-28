<template>
  <ion-page>
    <ion-content>
    <div class="content">
        <div class="section-title">
            <h1 class="app-name">idylle</h1>
        </div>
        <form class="buttons">
            <ion-button class="button-create" @click="$router.push('register')" color="light" shape="round">Create a account</ion-button>
            <ion-button class="button-login" @click="$router.push('login')" fill="outline" color="light" shape="round">Log in with email</ion-button>
        </form>
    </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage } from '@ionic/vue';

export default {
  name: "CreateOrConnexionPage",
  components: {IonPage},

  setup() {
    return {

    }
  },
}
</script>

<style scoped>

    *{
       font-family: 'Montserrat', sans-serif;
    }

    ion-content {
        --ion-background-color: linear-gradient(75deg, #EA9086 50%, #EFAF97  100%);
    }

    .content { 
        position: relative;
        top: 28em;
    }

    .section-title {
        display: flex;
        justify-content: center;
        margin-bottom: 6em;
    }

    .app-name{
        font-weight: 900;
        color: #ffffff;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 40px;
        text-shadow: 6px 6px 0px rgb(0 0 0 / 20%);
    }

    .buttons {
        display: flex;
        justify-content: center;
        flex-direction: column;
        
        padding-right: 15px;
        padding-left: 15px;

        text-transform: uppercase;
    }

    .button-create {
        margin-bottom: 15px;
    }

    .button-create, .button-login {
        height: 45px;
        font-size: 13px;
    }

</style>

