<template>
  <div>
    <router-view></router-view>
    <SignUp></SignUp>
  </div>
</template>

<script setup lang="ts">
import SignUp from './pages/auth/SignUp.vue'
</script>

<style scoped></style>
