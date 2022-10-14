<template>
  <v-container>
    <v-card variant="outlined">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">what is this</div>
          <div class="text-h6 mb-1">
            Vite + Vue3 + Vuetify(nightly) + GithubPagesSPA
          </div>
          <div class="text-caption"></div>
          <v-card-actions> </v-card-actions>
        </div>
      </v-card-item>
    </v-card>

    <v-card variant="outlined">
      <v-card-item>
        <div>
          <div class="text-overline mb-1">OVERLINE</div>
          <div class="text-h6 mb-1">About</div>
          <div class="text-caption">move to Vuetify generate page</div>
          <v-card-actions>
            <v-btn variant="outlined" to="/about"> Move </v-btn>
          </v-card-actions>
        </div>
      </v-card-item>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutPage",
  data() {
    return {};
  },
  created() {
    // Github 404 handling
    if (Object.prototype.hasOwnProperty.call(this.$route.query, "fromgh404")) {
      console.log(this.$route);
      try {
        const url = new URL(
          this.$route.query["fromgh404"] as string,
          "http://localhost"
        );
        const route = url.pathname + url.search + url.hash;
        console.log("replace", route);
        this.$router.replace(route);
      } catch (error) {
        console.error(error);
      }
    }
  },
});
</script>
