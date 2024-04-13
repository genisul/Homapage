import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('authentication', () => {
  const loginState = ref(false)

  const signIn = () => (loginState.value = true)
  const signOut = () => (loginState.value = false)

  return { loginState, signIn, signOut }
})
