<template>
  <div class="user-page">
    <div class="users-page-container">
      <div class="user-page-header">
        <h1 class="users-page-title">{{ currentUser.name }}</h1>
        <div class="user-page-nickname">@{{ currentUser.username }}</div>
      </div>
      <div class="user-page-info">
        <user-info-item
          v-for="userInfo in Object.entries(this.currentUserInfo)"
          :key="userInfo[0]"
          :title="userInfo[0]"
          :text="userInfo[1]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserInfoItem from '@/components/UserInfoItem'

export default {
  name: 'UserPage',
  components: { UserInfoItem },
  data () {
    return {
      currentUser: {},
      currentUserInfo: {},
      userId: this.$route.params.userId
    }
  },
  methods: {
    async loadingUser () {
      const url = 'https://jsonplaceholder.typicode.com/users/' + this.userId
      const response = await fetch(url)
      if (response.ok) {
        const json = await response.json()
        this.currentUser.name = json.name
        this.currentUser.username = json.username
        this.currentUserInfo.Email = json.email
        this.currentUserInfo.Phone = json.phone
        this.currentUserInfo.Website = json.website
        this.currentUserInfo.Company = json.company.name
        const address = json.address
        this.currentUserInfo.Address = `${address.suite} ${address.street}, ${address.city}, ${address.zipcode}`
        console.log(this.currentUser)
      } else {
        alert('Ошибка HTTP: ' + response.status)
      }
    }
  },
  mounted () {
    this.loadingUser()
  }
}
</script>

<style scoped>

.user-page {
  display: block;
  margin: 0 auto;
  width: 1280px;
}

.users-page-container {
  max-width: 1280px;
  min-height: 100%;
  padding: 56px 50px 28px 50px;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  gap: 50px;
}

.user-page-header {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  justify-content: start;
}

.users-page-title {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}

.user-page-nickname {
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  align-self: start;
}

.user-page-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 32px;
}

.user-page-info div:nth-child(5) {
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}

@media screen and (max-width: 850px) {
  .user-page-info {
    grid-template-columns: repeat(2, 1fr);
  }

  .user-page-info div:nth-child(5) {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 3;
  }
}

@media screen and (max-width: 490px) {
  .users-page-container {
    padding: 32px 20px;
    gap: 32px;
  }

  .user-page-header {
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }

  .user-page-info {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 32px;
  }
}

</style>
