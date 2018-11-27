import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "@/firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: "https://api.edamam.com/search",
    user: null,
    isAuthenticated: false
  },

  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    }
  },

  actions: {
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
        });
    },
    async getRecipes({ state, commit }, plan) {
      try {
        const response = await axios.get(`${state.apiUrl}`, {
          params: {
            q: plan,
            app_id: "48310613",
            app_key: "320511544dcb1cca4c2c66bb0ec79cac",
            from: 0,
            to: 9
          }
        });
        commit("setRecipes", response.data.hits);
      } catch (err) {
        commit("setRecipes", []);
        alert(err.message);
      }
    }
  }
});
