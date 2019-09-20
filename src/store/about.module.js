import axios from "axios";

export default {
  actions: {
    async about({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3000/about/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        const info = data.data;
        commit("setInfo", info);
      } catch (e) {
        commit("setError", e);
        localStorage.removeItem("token");
      }
    }
  }
};
