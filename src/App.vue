<template>
  <div id="app">
    <nav class="center">
      <!-- 路徑連結區 nav -->
      <router-link to="/">todo</router-link> |
      <router-link to="/todo2">todo2</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.center {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>
