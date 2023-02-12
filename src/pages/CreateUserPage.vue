<template>
<div class="create-user">
  <div class="create-user-container">
    <div class="create-user-title-block">
      <back-button @click="toBackPage"></back-button>
      <h1 class="create-user-title">Сreate user</h1>
    </div>
    <div class="create-user-form">
      <user-form/>
    </div>
  </div>
</div>
</template>

<script>
import UserForm from '@/components/UserForm'
import BackButton from '@/components/UI/BackButton'
export default {
  name: 'CreateUserPage',
  components: { BackButton, UserForm },
  methods: {
    toBackPage () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.create-user {
  display: block;
  margin: 0 auto;
  width: 1280px;
}

.create-user-container {
  max-width: 1280px;
  min-height: 100%;
  padding: 56px 50px 28px 50px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

@media screen and (max-width: 490px) {
  .create-user-container {
    padding: 32px 20px;
  }
}

.create-user-title {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}

.create-user-title-block {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

</style>
