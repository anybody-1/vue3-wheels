<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
export default {
  name: "App",
  setup(props) {
    const menuVisible = ref(false);
    provide("asideVisible", menuVisible);
  },
};
</script>
