<template>
  <v-container>

    <v-card variant="outlined">
      <v-card-item>
      <div>
        <div class="text-overline mb-1">
          OVERLINE
        </div>
        <div class="text-h6 mb-1">
          About
        </div>
        <div class="text-caption">move to Vuetify generate page</div>
        <v-card-actions>
      <v-btn variant="outlined" to="/about">
        Move
      </v-btn>
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
});
</script>
