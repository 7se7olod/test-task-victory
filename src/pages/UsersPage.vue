<template>
  <div class="users-page-container">
    <div class="users-head">
      <h1 class="users-page-title">Users</h1>
      <user-button @click="toCreateUserPage">Create user</user-button>
    </div>
    <user-list :users="this.users"/>
  </div>
</template>

<script>
import UserButton from '@/components/UI/UserButton'
import UserList from '@/components/UserList'

export default {
  name: 'UsersPage',
  components: {
    UserButton,
    UserList
  },
  data () {
    return {
      users: []
    }
  },
  methods: {
    async loadAllUsers () {
      const url = 'https://jsonplaceholder.typicode.com/users'
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json()
        for (const jsonKey in json) {
          this.users.push(json[jsonKey])
        }
      } else {
        alert('Ошибка HTTP: ' + response.status)
      }
    },
    toCreateUserPage () {
      this.$router.push('/create')
    }
  },
  mounted () {
    this.loadAllUsers()
  }
}
</script>

<style scoped>
.users-page-container {
  max-width: 1280px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  padding: 56px 50px 28px 50px;
}

@media screen and (max-width: 490px){
  .users-page-container {
    padding: 32px 20px;
  }
}

.users-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-bottom: 28px;
}

.users-page-title {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}
</style>
