<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>MEETING APP</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>
        <label>Email</label>
        <input type="text" placeholder="Email" name="email" v-model="email">
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" placeholder="Mot de passe" name="password" v-model="password">
      </div>
      <input type="button" @click="sendForm()" value="Se connecter">
    </ion-content>
  </ion-page>
</template>

<script>
import { ellipse, square, triangle } from 'ionicons/icons';
import { IonPage } from '@ionic/vue';

export default {
  name: "LoginPage",
  components: {IonPage},
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

</style>
