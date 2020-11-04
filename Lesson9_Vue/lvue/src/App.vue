<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
    </nav>
    <h1>Git Users</h1>
    <router-view />
  </div>
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
nav a
  margin: 0 10px
  border: 1px solid black
  padding: 10px
  border-radius: 10px
  text-decoration: none
  font-size: 30px
</style>
