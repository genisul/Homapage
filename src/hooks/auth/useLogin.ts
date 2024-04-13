import type { TUser } from '@/types/User'
import axios from 'axios'
import { ref } from 'vue'

export const useLogin = () => {
  const user = ref<TUser>({ email: '', password: '' })
  const isError = ref(false)
  const isSuccess = ref(false)
  const isLoading = ref(false)
  const message = ref('')

  const login = async () => {
    if (user.value.email === '' || user.value.password === '') {
      message.value = '이메일과 비밀번호를 입력해주세요.'
      return
    }

    isLoading.value = true

    try {
      await axios.post('https://jsonplaceholder.typicode.com/users', user.value)
      isSuccess.value = true
      message.value = 'Login Success'
    } catch (e: any) {
      isError.value = true
      message.value = 'Login failed'
    }
    isLoading.value = false
  }

  return { user, isError, isSuccess, isLoading, message, login }
}
