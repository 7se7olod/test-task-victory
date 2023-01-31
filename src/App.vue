<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'Inter-Regular';
  src: local("Inter-Regular.ttf"),
  url("~@/assets/fonts/Inter-Regular.ttf") format("ttf");
}

@font-face {
  font-family: 'Inter-ExtraBold';
  src: local("Inter-ExtraBold.ttf"),
  url("~@/assets/fonts/Inter-ExtraBold.ttf") format("ttf");
}

body {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  font-family: 'Inter-Regular', sans-serif;
  background-color: #F5F5F5;
}

#app {
  display: flex;
  justify-content: center;
}

</style>
