import { isRef, Ref, ref } from 'vue'
type Fn = () => void

export function useToggle(value: Ref<boolean>): Fn
export function useToggle(initialValue?: boolean): [Ref<boolean>, Fn]
export function useToggle (initialValue: boolean | Ref<boolean> = false): any {
  const boolean = ref(initialValue)
  const toggle = () => (boolean.value = !boolean.value)
  return [boolean, toggle] as const // as const 相当于加了readonly
}
