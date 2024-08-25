<template>
  <div class="main-todo">
    <input type="checkbox" />
    <input type="text" class="input-box" />
    <input type="date" />
    <img class="edit" src="/src/assets/img/edit.png" />
    <img class="delete" src="/src/assets/img/delete.png" />
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
  border-style: solid;
  padding: 40px;
}

.main-todo {
  display: flex;
  width: 100%;

  justify-content: space-around;
}

.input-box {
  box-shadow: 0 2px 5px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 30px;
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
