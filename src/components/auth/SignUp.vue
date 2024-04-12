<template>
  <form class="container" @submit.prevent="signup">
    <input type="email" placeholder="email" v-model="user.email" />
    <input type="password" placeholder="password" v-model="user.password" />
    <input type="password" placeholder="passwordCheck" v-model="passwordCheck" />
    <button type="submit">sign up</button>

    <div v-if="isLoading">회원가입 진행중...</div>
    <div v-else>{{ message }}</div>
  </form>
</template>

<script setup lang="ts">
import { useSignUp } from '@/hooks/auth/useSignUp'

// 분해할당
const { user, passwordCheck, isLoading, message, signup } = useSignUp()
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
