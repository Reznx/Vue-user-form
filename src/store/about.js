import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: null
  },
  mutations: {
    setInfo(state, info) {
      state.info = info;
    }
  },
  actions: {
    async about({ commit }) {
      try {
        await axios
          .get("http://localhost:3000/about/", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(response => {
            const info = response.data.data;
            commit("setInfo", info);
          });
      } catch (e) {
        console.log(error);
      }
    }
  },
  getters: {
    info: state => state.info
  }
});
