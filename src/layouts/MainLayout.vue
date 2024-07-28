<template>
  <main class="home-page">
    <div class="container">
      <h1 class="londrina-shadow-regular logo">TODO</h1>
      <div class="bottom-container">
        <div class="bottom-text">
          <h1 class="londrina-shadow-regular tasks">Tasks</h1>
          <h1 class="londrina-shadow-regular add">
            Add New
            <img class="plus" src="/src/assets/img/plus.png" />
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-page {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  width: 472px;
  height: 497px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  padding: 40px;
}

.logo {
  font-size: 48px;
  margin-bottom: 40px;
}

.bottom-container {
  width: 472px;
  height: 70px;
  background-color: white;
  border-width: 1px;
  border-color: black;
  border-style: solid;
}

.bottom-text {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  gap: 170px;
}

.plus {
  width: 21px;
  height: 21px;
}
</style>
