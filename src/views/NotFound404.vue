<template>
  <div class="container pa-5">
    <div id="for404">
      <div class="logo-404 half-area">
        <img src="../assets/404.png" alt="404" />
      </div>
      <div class="content half-area">
        <h3>Oops... 找不到網頁</h3>
        <p>如果不支援自動跳轉，請點選下方按鈕</p>
        <router-link to="/">
          <el-button type="info" size="medium">To Homepage</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  created() {
    setTimeout(() => this.$router.push({ path: "/" }), 5000);
  }
};
</script>

<style lang="scss" scoped src="./../styles/NotFound404.scss"></style>
