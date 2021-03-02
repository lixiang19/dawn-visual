import { ref, watch, Ref, onMounted } from 'vue'
export function useCssVar (
  prop: string,
  el?: Ref<HTMLElement | null>
) {
  const variable = ref('')
  const _el = ref(el || window?.document?.documentElement)
  console.log('🚀 ~ file: useCssVar.ts ~ line 8 ~ _el', _el)

  onMounted(() => {
    watch(
      _el,
      () => {
        if (_el.value && window) {
          variable.value = window.getComputedStyle(_el.value).getPropertyValue(prop)
        }
      },
      { immediate: true }
    )
  })
  watch(
    variable,
    (val) => {
      if (_el.value?.style) { _el.value.style.setProperty(prop, val) }
    }
  )

  return variable
}
