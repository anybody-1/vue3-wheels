<template>
  <nav>导航栏</nav>
  <router-link to="/">first</router-link>|
  <router-link to="xxx">second</router-link>
  <hr />

  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
