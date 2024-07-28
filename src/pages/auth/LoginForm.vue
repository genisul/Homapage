<template>
  <main class="login-page">
    <div class="container">
      <form @submit.prevent="login">
        <div class="title-container">
          <h1 class="londrina-shadow-regular logo">TODO</h1>
          <h3 class="inter-semibold phrase-1">Create an account</h3>
          <h4 class="inter-regular phrase-2">Enter your email to sign up for this app</h4>
          <div class="input-box">
            <input type="text" placeholder="email" v-model="user.email" />
            <input type="password" placeholder="password" v-model="user.password" />
            <button type="submit">Sign in with email</button>
          </div>
        </div>
        <div v-if="isLoading">로그인 중...</div>
        <div v-else>{{ message }}</div>
      </form>
      <p class="inter-regular phrase-signup">
        <span>you don't have an account.</span>
        <router-link to="/signup">Go to sign up</router-link>
      </p>
    </div>
    <!-- <button @click="router.push({ name: 'signup' })">회원가입</button> -->
  </main>
</template>

<script setup lang="ts">
import { useLogin } from '@/hooks/auth/useLogin'
import { useRouter, RouterLink } from 'vue-router'
const router = useRouter()

const { user, isLoading, message, login } = useLogin()

// TODO: 계정정보 맞는지 체크(회원가입한 계정과 로그인한 계정이 맞는지.. 나중에)
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  width: 472px;
  height: 497px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
}

.title-container {
  text-align: center;
}

.logo {
  font-size: 48px;
  margin-bottom: 40px;
}

.phrase-1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.phrase-2 {
  font-size: 16px;
  margin-bottom: 20px;
}

.input-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 24px;
}

.input-box input {
  width: 100%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0 10px;
}

.input-box button {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 0 10px;
  background-color: black;
  color: white;
}

.phrase-signup {
  display: flex;
  justify-content: center;
  gap: 10px;
  color: #8e8e8e;
}

.phrase-signup a {
  color: rgba(0, 0, 255, 0.521);
}
</style>
