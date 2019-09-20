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
    info: [],
    error: null
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
    },
    setError(state, error) {
      state.error = error;
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
        commit("setError", e);
        localStorage.removeItem("token");
        throw e;
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
        commit("setError", e);
        localStorage.removeItem("token");
        throw e;
      }
    },

    logout({ commit }) {
      try {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
      } catch (e) {
        commit("setError", e);
        throw e;
      }
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    info: state => state.info,
    error: s => s.error
  },
  modules: {
    about
  }
});
