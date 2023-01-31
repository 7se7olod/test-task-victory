<template>
  <div class="user-info-item">
    <div class="user-info-title">{{this.title}}</div>
    <div class="user-info-text">{{this.text}}</div>
  </div>
</template>

<script>
export default {
  name: 'UserInfoItem',
  props: {
    title: { type: String, required: true },
    text: { type: String, required: true }
  }
}
</script>

<style scoped>
.user-info-item {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
}

.user-info-title {
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.user-info-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}
</style>
