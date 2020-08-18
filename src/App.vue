<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup(props) {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", menuVisible);
    router.afterEach((to, from) => {
      if (width <= 500) {
        menuVisible.value = false;
      }
      // to and from are both route objects.
    });
  },
};
</script>
