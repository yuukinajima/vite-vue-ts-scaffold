<template>
  <v-app>
    <v-app-bar app> This is Scaffold for Vite vue TS </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>
      <v-container>
        <v-divider></v-divider>
        <v-row align="center">
          <v-col align="center">
            <v-btn
              flat
              variant="flat"
              prepend-icon="mdi-web"
              href="https://yuukinajima.github.io/vite-vue-ts-scaffold/"
            >
              Site
            </v-btn>
          </v-col>
          <v-col align="center">
            <v-btn
              variant="flat"
              prepend-icon="mdi-github"
              href="http://github.com/yuukinajima/vite-vue-ts-scaffold"
            >
              Github
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  components: {},

  data() {
    return {
      t: import.meta.env.VITE_MY_TITLE,
    };
  },
});
</script>
