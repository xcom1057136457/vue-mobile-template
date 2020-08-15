<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="routerKey"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="routerKey"></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      routerKey: Date.parse(new Date()),
      isScrolling: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  methods: {
     ...mapActions('scrollInfo', ['onScroll']),
  }
};
</script>

<style>
@import "./assets/css/font.less";

* {
  margin: 0;
  padding: 0;
  list-style: none;
}

html,
body,
#app {
  background-color: rgb(251, 252, 255);
  font-family: Poppins, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, Segoe UI, Arial, Roboto, "PingFang SC", "Hiragino Sans GB",
    "Microsoft Yahei", sans-serif;
}
</style>
