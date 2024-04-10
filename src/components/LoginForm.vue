<template>
  <form class="container" @submit.prevent="handleSubmit">
    <input type="email" placeholder="email" />
    <input type="text" placeholder="password" v-model="password" />
    <input type="text" placeholder="passwordCheck" v-model="passwordCheck" />
    <button type="submit">sign up</button>
    <div v-if="toShowErrorMessege">비밀번호를 다시 입력해주세요.</div>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const password = ref('')
const passwordCheck = ref('')
const toShowErrorMessege = ref(false)

const checkPassword = () => {
  if (password.value == passwordCheck.value) {
    toShowErrorMessege.value = false
    return true
  } else {
    toShowErrorMessege.value = true
    return false
  }
}
const handleSubmit = () => {
  if (!checkPassword()) return
  // 같으면 요청보내기(로그인)
  axios.postForm('http://localhost:5173/posts/login')
  console.log('성공')
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

.passwordCheck {
  background-color: white;
  width: auto;
  height: 23px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
}
</style>
