<template>
  <div>
    <topnav />
    <div class="banner">
      <h1>vue-轮子</h1>
      <h2>厉害的UI框架</h2>
      <p class="action">
        <a>Github</a>
        <a>Start</a>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped></style>
