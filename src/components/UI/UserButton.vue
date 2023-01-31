<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'UserButton'
}
</script>

<style scoped>

.btn {
  font-family: 'Inter-Regular', sans-serif;
  font-size: 14px;
  line-height: 24px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid black;
  font-weight: 400;
  width: 110px;
  height: 40px;
}

.btn:hover {
  border-color: #444444;
  color: #444444;
  cursor: pointer;
}

</style>
