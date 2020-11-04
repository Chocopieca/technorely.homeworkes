<template>
  <div>
    <div class="user" v-for="user in allUsers" :key="user.id">
      <img v-bind:src="user.avatar_url" alt="avatar" />
      <p>{{ user.login }}</p>
      <a v-bind:href="user.html_url">{{ user.html_url }}</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["allUsers"]),
  methods: mapActions(["fetchUsers"]),
  components: {},
  async mounted() {
    this.fetchUsers();
  }
};
</script>

<style lang="sass">
.user
  display: flex
  justify-content: space-evenly
  align-items: center
  margin-bottom: 1rem
  border: 1px solid black
  padding: 10px
img
  width: 100px
  height: 100px
p
  font-size: 30px
</style>
