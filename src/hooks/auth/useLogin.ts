import router from '@/router'
import { useAuthStore } from '@/store/auth/useAuthStore'
import type { TUser } from '@/types/User'
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useLogin = () => {
  const user = ref<TUser>({ email: '', password: '' })
  const isError = ref(false)
  const isSuccess = ref(false)
  const isLoading = ref(false)
  const message = ref('')

  const { signIn } = useAuthStore()
  const router = useRouter()

  const login = async () => {
    if (user.value.email === '' || user.value.password === '') {
      message.value = '이메일과 비밀번호를 입력해주세요.'
      return
    }

    isLoading.value = true

    try {
      await axios.post('http://localhost:3000/auth/signin', user.value)
      isSuccess.value = true
      message.value = 'Login Success'

      const { signIn } = useAuthStore()

      if (isSuccess.value) {
        signIn()
        router.push({ name: 'home' })
      }
    } catch (e: any) {
      isError.value = true
      message.value = 'Login failed'
    }
    isLoading.value = false
  }

  return { user, isError, isSuccess, isLoading, message, signIn, login }
}
