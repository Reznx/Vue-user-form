<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line v-if="isLoggedIn">
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{info.username}}</v-list-item-title>
        <v-list-item-subtitle>{{info.about}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-img :src="info.avatar"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-list-item-title v-else>Войдите в систему</v-list-item-title>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["info", "isLoggedIn"])
  }
};
</script>;

