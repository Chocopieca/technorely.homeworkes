import { createStore } from "vuex";
import users from "./modules/users";

const store = createStore({
  modules: {
    users
  }
});

export default store;
