<template>
  <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Application</v-toolbar-title>
      <div class="flex-grow-1"></div>
      <div class="my-2" v-if="isLoggedIn">
        <v-btn small color="primary" @click="logout">Выйти</v-btn>
      </div>
      <div class="my-2" v-else>
        <v-btn to="/login" small color="primary">Войти</v-btn>
      </div>
      <div class="my-2">
        <v-btn small color="primary" @click="infoInfo">Войти</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    infoInfo() {
      console.log(JSON.parse(JSON.stringify(this.$store.state.info)));
    }
  },
  async created() {
    await this.$store.dispatch("about");
  }
};
</script>
