<template>
  <form @submit.prevent="handleLogin">
    <div class="container">
      <input type="text" placeholder="email" v-model="email" />
      <input type="text" placeholder="password" v-model="password" />
      <button type="submit">Login</button>
      <div>{{ message }}</div>
    </div>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const isSuccess = ref(false)
const message = ref('')

// const nullChecked = () => {
//   if (email.value === null) {
//     isSuccess.value = false
//     message.value = '아이디,비번입력'
//     return
//   }
// }

// 로그인 요청 보내기
const handleLogin = async () => {
  if (email.value === '' || password.value === '') {
    message.value = '이메일과 비밀번호를 입력해주세요.'
    return
  }

  try {
    await axios.post('https://jsonplaceholder.typicode.com/users', {
      email: email.value,
      password: password.value
    })
    isSuccess.value = true
    message.value = 'success'
  } catch (e: any) {
    isSuccess.value = false
    message.value = 'failed'
  }
}

// 계정정보 맞는지 체크(회원가입한 계정과 로그인한 계정이 맞는지.. 나중에)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
</style>
