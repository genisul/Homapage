<script setup lang="ts">
import { useAuthStore } from '@/store/auth/useAuthStore'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()

const { loginState } = storeToRefs(store)

if (!loginState.value) {
  router.push({ name: 'login' })
}
</script>

<template>
  <main>Home Page</main>
</template>
