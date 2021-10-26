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
import { IonPage } from '@ionic/vue';
import Translator from "@/locales/i18n";
import Utils from "@/Utils/Utils";
import {Vue} from "vue-property-decorator";
export default  {
  extends: Vue,
  name: 'Tab1',
  components: { ExploreContainer, IonPage/*, IonHeader, IonToolbar, IonTitle, IonContent, IonPage*/ },
  methods: {
    test: function () {
      return Utils.buildHmacSha256Signature({test: "coco"});
    },
    t: function (text: string) {
      const t = Translator.t(text);
      console.log(t);
      console.log(this.test());
      return Translator.t(text);
    }
  }
}
</script>
