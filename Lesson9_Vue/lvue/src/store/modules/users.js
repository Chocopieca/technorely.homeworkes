export default {
  actions: {
    async fetchUsers({ commit }) {
      const res = await fetch("https://api.github.com/users");
      const users = await res.json();
      console.log(users);
      commit("updateUsers", users);
    }
  },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    }
  },
  state() {
    return {
      users: []
    };
  },
  getters: {
    allUsers(state) {
      return state.users;
    }
  }
};
