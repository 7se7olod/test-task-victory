<template>
  <div>
    <svg class="back-btn" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" viewBox="0 0 12 12" xml:space="preserve">
      <polygon fill="#1D1D1B" points="8.1464844,12 2.1464844,6 8.1464844,0 8.8535156,0.7070313 3.5605469,6 8.8535156,11.2929688 "/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'BackButton'
}
</script>

<style scoped>
.back-btn {
  cursor: pointer;
}
.back-btn:hover {
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.8));
}
</style>
