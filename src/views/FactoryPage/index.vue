<template >
  <div id="FactoryPage" ref="layoutRef">
    <div class="left_nav">
      <el-button
        type="text"
        :icon="navIcon"
        @click="changeNavWidth"
      ></el-button>
    </div>
    <div class="right_main">
      <div class="command_box"></div>
      <div class="main_wrapper"></div>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent,ref } from 'vue'
import { useCssVar } from 'src/hooks/useCssVar'
import { useToggle } from 'src/hooks/useToggle'
const useChangeNav =()=>{
  const layoutRef = ref<HTMLElement | null>(null)
    const navWidth = useCssVar('--navWidth', layoutRef)
    const {state:navIcon,setDefault,setRight} =useToggle('el-icon-s-fold','el-icon-s-unfold')
    function changeNavWidth () {
      if (navWidth.value === '5vw') {
        navWidth.value = '12.5vw'
        setDefault()
        console.log(navIcon);
      } else {
        navWidth.value = '5vw'
        setRight()
        console.log(navIcon);
      }
    }
    return {
      layoutRef,
      changeNavWidth,
      navIcon
    }
}
export default defineComponent({
  name:'FactoryPage',
  setup() {
    const{layoutRef,changeNavWidth,navIcon}=useChangeNav()
    return {
      layoutRef,
      changeNavWidth,
      navIcon
    }
  }
})
</script>
<style lang="scss">
@import "@/assets/style/util";
#FactoryPage {
  height: 100%;
  width: 100%;
  --navWidth: 12.5vw;
  display: flex;
  justify-content: space-between;
  .left_nav {
    height: 100%;
    width: var(--navWidth);
    @include scrollY();
    @include card("depth16");
    border-right: 1px solid #eee;
    transition: 0.1s;
  }
  .right_main {
    height: 100%;
    width: calc(100% - var(--navWidth) - 5px);
    padding: 20px;
    background: #fcfcfc;
    .command_box {
      height: 40px;
      width: 100%;
      border: 1px solid #eee;
    }
    .main_wrapper {
      width: 100%;
      height: calc(100% - 40px);
      padding: 20px;
      border: 1px solid #eee;
    }
  }
}
</style>
