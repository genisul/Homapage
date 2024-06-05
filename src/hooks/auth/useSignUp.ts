import type { TUser } from '@/types/User'
import axios from 'axios'
import { ref } from 'vue'

export const useSignUp = () => {
  const user = ref<TUser>({ email: '', password: '' })
  const passwordCheck = ref('')
  const isError = ref(false)
  const isSuccess = ref(false)
  const message = ref('')
  const isLoading = ref(false)

  const signup = async () => {
    if (user.value.password != passwordCheck.value) {
      message.value = '비밀번호를 잘 못 입력했습니다.'
      return
    }

    isLoading.value = true

    try {
      await axios.post('http://localhost:3000/auth/signup', user.value)
      isSuccess.value = true
      message.value = 'Signup success!!'
    } catch (e: any) {
      isError.value = true
      message.value = 'Signup failed...'
      isLoading.value = false
    }
    isLoading.value = false
  }

  return { user, passwordCheck, isLoading, isError, isSuccess, message, signup }
}
