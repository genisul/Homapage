<template>
  <div class="container">
    <input type="email" placeholder="email" />
    <input type="text" placeholder="password" v-model="password" />
    <input type="text" placeholder="passwordCheck" v-model="passwordCheck" />

    <!-- <label class="passwordCheck">{{ password }}</label> -->
    <button type="submit" @click="loginFail">sign up</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const password = ref('')
const passwordCheck = ref('')

const loginFail = () => {
  if (password.value == passwordCheck.value) {
    return true // 추후 수정
  } else {
    console.warn('비밀번호가 틀렸습니다.')
    return false
  }
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
