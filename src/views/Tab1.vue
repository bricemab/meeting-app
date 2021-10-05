<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ExploreContainer :name="t('test')" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import ExploreContainer from '@/components/ExploreContainer.vue';
// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import Translator from "@/locales/i18n";
import {Vue} from "vue-property-decorator";
export default  {
  extends: Vue,
  name: 'Tab1',
  components: { ExploreContainer/*, IonHeader, IonToolbar, IonTitle, IonContent, IonPage*/ },
  methods: {
    t: function (text: string) {
      console.log(Translator.t(text))
    return Translator.t(text)
    }
  }
}
</script>
