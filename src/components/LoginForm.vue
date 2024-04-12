<template>
  <form @submit.prevent="login">
    <div class="container">
      <input type="text" placeholder="email" v-model="user.email" />
      <input type="password" placeholder="password" v-model="user.password" />
      <button type="submit">Login</button>
      <div>{{ message }}</div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { useLogin } from '@/hooks/auth/useLogin'

const { user, message, login } = useLogin()

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
