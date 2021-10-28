<template>
  <ion-page>
    <ion-header>

    </ion-header>

  </ion-page>
</template>

<script>
import { ellipse, square, triangle } from 'ionicons/icons';
import { IonPage } from '@ionic/vue';
import Global from "@/Utils/Global";

export default {
  name: "RegisterPage",
  components: {IonPage},
  setup() {
    return {
      ellipse,
      square,
      triangle,
    }
  },
  methods: {
    async createUser() {
      const params = {
        email: "bricemabi@gmail.com",
        lastname: "Mabillard",
        firstname: "Brice",
        password: "A$df1234",
        birthday: new Date("2002-07-06"),
        bio: "Ceci est ma super BIO",
        sex: "MAN",
        orientation: "HETERO"
      };
      const createUserResponse = await Global.executePost("/users/add", params);
      console.log(createUserResponse);
    }
  }
}
</script>

<style scoped>

</style>
