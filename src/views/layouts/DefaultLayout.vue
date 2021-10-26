<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <ion-router-outlet></ion-router-outlet>
    </ion-content>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="matches" href="/meet/matches">
          <ion-icon :icon="newspaper"/>
          <ion-label>Matches</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="likes" href="/meet/likes">
          <ion-icon :icon="heart"/>
          <ion-label>Likes</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="conversations" href="/meet/conversations">
          <ion-icon :icon="chatbubble"/>
          <ion-label>Conversation</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="Logout" @click="this.$store.dispatch('logout'); this.$router.push({path: 'login'});">
          <ion-icon :icon="logOut"/>
          <ion-label>Déconnexion</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonToolbar} from '@ionic/vue';
import {chatbubble, heart, newspaper, logOut} from 'ionicons/icons';

export default {
  name: 'DefaultLayout',
  components: {IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonToolbar},
  setup() {
    return {
      chatbubble,
      heart,
      newspaper,
      logOut
    }
  }
}
</script>
<style scoped>

</style>