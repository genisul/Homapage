<template>
  <div class="container">
    <div class="main-todo">
      <input type="checkbox" />
      <input type="text" />
      <input type="date" />
      <img class="edit" src="/src/assets/img/edit.png" />
      <img class="delete" src="/src/assets/img/delete.png" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  align-items: center;
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
  padding: 40px;
}

.main-todo {
  display: flex;
  width: 100%;

  justify-content: space-around;
}

.edit {
  width: 21px;
  height: 21px;
}

.delete {
  width: 21px;
  height: 21px;
}
</style>
