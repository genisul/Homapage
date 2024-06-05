<template>
  <main class="signUp-page">
    <div class="main-container">
      <form class="container" @submit.prevent="signup">
        <div class="title-info-container">
          <h1 class="londrina-shadow-regular logo">TODO</h1>
          <h3 class="inter-semibold phrase-info-1">Create an account</h3>
          <h4 class="inter-regular phrase-info-2">Enter your email to sign up for this app</h4>

          <div class="form-container">
            <input type="email" placeholder="email" v-model="user.email" />
            <input type="password" placeholder="password" v-model="user.password" />
            <input type="password" placeholder="passwordCheck" v-model="passwordCheck" />
            <button type="submit">Sign up with email</button>
          </div>
        </div>
        <div v-if="isLoading">회원가입 진행중...</div>
        <div v-else>{{ message }}</div>
      </form>
      <p class="inter-regular phrase-logoin">
        <span>After signing up for membership</span>
        <a>Go to Loging</a>
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSignUp } from '@/hooks/auth/useSignUp'

// 분해할당
const { user, passwordCheck, isLoading, message, signup } = useSignUp()
</script>

<style scoped>
.signUp-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main-container {
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
  padding: 0 24px;
}

.title-info-container {
  text-align: center;
}

.logo {
  font-size: 48px;
  margin-bottom: 40px;
}

.phrase-info-1 {
  font-size: 20px;
  margin-bottom: 20px;
}

.phrase-info-2 {
  font-size: 16px;
  margin-bottom: 20px;
}

.form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 24;
}

.form-container input {
  width: 100%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0 10px;
}

.form-container button {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 0 10px;
  background-color: black;
  color: white;
}

.passwordCheck {
  background-color: white;
  width: auto;
  height: 23px;
  border-style: solid;
  border-width: 1px;
  border-color: gray;
}

.phrase-logoin {
  display: flex;
  justify-content: center;
  gap: 10px;
  color: #8e8e8e;
}

.phrase-logoin a {
  color: #94e291;
}
</style>
