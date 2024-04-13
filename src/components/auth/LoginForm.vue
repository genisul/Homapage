<template>
  <form @submit.prevent="login">
    <div class="container">
      <input type="text" placeholder="email" v-model="user.email" />
      <input type="password" placeholder="password" v-model="user.password" />
      <button type="submit">Login</button>
      <div v-if="isLoading">로그인 중...</div>
      <div v-else>{{ message }}</div>
    </div>
  </form>
  <button @click="router.push({ name: 'signup' })">회원가입</button>
</template>

<script setup lang="ts">
import { useLogin } from '@/hooks/auth/useLogin'
import { useRouter } from 'vue-router'
const router = useRouter()

const { user, isLoading, message, login } = useLogin()

// TODO: 계정정보 맞는지 체크(회원가입한 계정과 로그인한 계정이 맞는지.. 나중에)
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}
</style>
