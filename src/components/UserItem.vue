<template>
<div class="user-item">
  <div class="user-block">
    <div class="user-full-name">{{ user.name }}</div>
    <div class="user-nick-name">@{{ user.username }}</div>
  </div>
  <div class="user-block">
    <div class="user-email">{{ user.email }}</div>
    <div class="user-phone">{{ user.phone }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.user-item {
  width: 380px;
  height: 160px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  justify-content: space-around;
  background-color: #FFFFFF;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

@media screen and (max-width: 490px) {
  .user-item {
    width: 350px;
  }
}

.user-item:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}

.user-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.user-full-name {
  font-family: 'Inter-Bold', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.user-nick-name {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #444444;
}

.user-email {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
}

.user-phone {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
}

</style>
