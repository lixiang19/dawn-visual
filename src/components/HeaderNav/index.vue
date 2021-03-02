<template>
  <div>
    <el-menu default-active="1" mode="horizontal" :router="true">
      <el-menu-item index="Home">主页</el-menu-item>
      <el-menu-item index="HistoryPage">历史</el-menu-item>
      <el-menu-item index="FactoryPage">编辑</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default {}
</script>
<style lang="scss"></style>
