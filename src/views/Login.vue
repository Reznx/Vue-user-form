<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Авторизация</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form @submit.prevent="submitHandler" id="check-login-form">
        <v-text-field id="email" v-model="username" placeholder="Логин"></v-text-field>
        <v-text-field id="password" v-model="password" placeholder="Пароль" type="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      Нет аккаунта? &nbsp;
      <router-link to="/register">Зарегистрироваться</router-link>
      <div class="flex-grow-1"></div>
      <v-spacer></v-spacer>
      <v-btn type="submit" color="primary" form="check-login-form">Войти</v-btn>
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
    submitHandler() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
      console.log(123);
    }
  }
};
</script>
