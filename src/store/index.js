import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import about from "./about.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
    info: []
  },
  mutations: {
    authSuccess(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    authError(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
    setInfo(state, info) {
      state.info = info;
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        await axios({
          url: "http://localhost:3000/login",
          data: user,
          method: "POST"
        }).then(({ data }) => {
          const token = data.token;
          const user = data.user;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          commit("authSuccess", token, user);
        });
      } catch (e) {
        commit("authError");
        localStorage.removeItem("token");
      }
    },

    async register({ commit }, user) {
      try {
        await axios({
          url: "http://localhost:3000/register",
          data: user,
          method: "POST"
        }).then(({ data }) => {
          const token = data.token;
          const user = data.user;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
          commit("authSuccess", token, user);
        });
      } catch (e) {
        commit("authError");
        localStorage.removeItem("token");
      }
    },

    logout({ commit }) {
      try {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
      } catch (e) {
        console.error(e);
      }
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    info: state => state.info
  },
  modules: {
    about
  }
});
