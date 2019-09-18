<template>
  <v-card class="elevation-12">
    <v-toolbar color="primary" dark flat>
      <v-toolbar-title>Регистрация</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field label="Логин" name="login" type="text"></v-text-field>

        <v-text-field id="password" label="Пароль" name="password" type="password"></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      Усть аккаунт?
      <router-link to="/login">Войти</router-link>
      <div class="flex-grow-1"></div>
      <v-btn color="primary">Регистрация</v-btn>
    </v-card-actions>
  </v-card>
</template>
