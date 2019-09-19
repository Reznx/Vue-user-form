<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Регистрация</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="login" id="check-login-form">
        <v-text-field id="username" v-model="username" placeholder="Логин"></v-text-field>
        <v-text-field id="password" v-model="password" placeholder="Пароль" type="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      Есть аккаунт? &nbsp;
      <router-link to="/login">Войти</router-link>
      <div class="flex-grow-1"></div>
      <v-spacer></v-spacer>
      <v-btn type="submit" color="primary" form="check-login-form">Регистрация</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    async login() {
      try {
        let username = this.username;
        let password = this.password;

        await this.$store.dispatch("register", { username, password });
        this.$router.push("/");
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
