<template>
  <div class="header">
    <HeaderNav></HeaderNav>
  </div>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script lang='ts'>
import HeaderNav from '@/components/HeaderNav/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { HeaderNav },
  setup () {

  }
})
</script>
<style lang="scss" scoped>
@import "@/assets/style/util";
.header {
  height: 60px;
  width: 100%;
}
.content {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  justify-content: space-between;
}
</style>
<style lang="scss">
@import "src/assets/style/reset";
#app {
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>
