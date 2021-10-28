<template>
  <ion-page>
    <ion-header>
  </ion-header>
    <ion-content>
      <div class="content">
        <div class="section-email">
          <h1 class="title">Email</h1>
          <div class="input-container">
            <ion-input class="input-email" type="text" name="email" v-model="email"></ion-input>
          </div>
        </div>
        <div class="section-password">
          <h1 class="title">Password</h1>
          <div class="input-container">
            <ion-input class="input-email" type="password" name="password" v-model="password"></ion-input>
          </div>
        </div>
          <form class="buttons">
              <ion-button class="button-next" @click="sendForm()" color="primary" shape="round">Next</ion-button>
          </form>
        </div>   
      </ion-content>
  </ion-page>
</template>

<script>
import { ellipse, square, triangle } from 'ionicons/icons';
import { IonPage, IonInput } from '@ionic/vue';

export default {
  name: "LoginPage",
  components: {IonPage, IonInput},
  mounted() {
    console.log(this.$store.getters.user)
    console.log(this.$store.getters.isLoggedIn)
  },
  setup() {
    return {
      ellipse,
      square,
      triangle,
    }
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    async sendForm() {
      const params = {
        email: this.email,
        password: this.password
      };
      const result = await this.$store.dispatch("login", params);
      if (result.success) {
        this.$router.push({path: "meet"});
      }
    }
  }
}
</script>

<style scoped>

    *{
       font-family: 'Montserrat', sans-serif;
    }

    .content {
      margin-top: 4rem;
    }

    .title {
        font-weight: 600;
    }

    .section-email, .section-password {
        padding-left: 30px;
        padding-right: 30px; 
        margin-bottom: 30px;
    }

    .input-email {
      border-bottom: 2px
      solid #999;
    }

    .buttons {
        display: flex;
        justify-content: center;
        flex-direction: column;
        
        padding-right: 25px;
        padding-left: 25px;

        text-transform: uppercase;
    }

       .button-next {
          height: 45px;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 1px;
      }


</style>
