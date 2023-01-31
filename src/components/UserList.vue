<template>
  <div class="user-list">
    <user-item
      v-for="user in users"
      :user="user"
      :key="user.id"
      @click="toUserPage(user.id)"
    />
  </div>
</template>

<script>
import UserItem from '@/components/UserItem'

export default {
  name: 'UserList',
  components: { UserItem },
  props: {
    users: {
      type: Array,
      require: true
    }
  },
  methods: {
    toUserPage (id) {
      this.$router.push({ name: 'user', params: { userId: id } })
    }
  }
}
</script>

<style scoped>
.user-list {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
}
</style>
