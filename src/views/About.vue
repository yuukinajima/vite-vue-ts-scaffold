<template>
  <HelloWorld />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "TestPage",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
});
</script>
