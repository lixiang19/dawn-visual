<template>
  <div id="appMain">
    <el-container>
      <el-header> Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
<style lang="scss">
@import "src/assets/reset";
#appMain {
  height: 100vh;
  width: 100vw;
}
</style>
