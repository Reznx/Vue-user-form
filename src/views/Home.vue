<template>
  <v-card max-width="344" class="mx-auto">
    <v-card-title v-if="info">{{info}}</v-card-title>
    <v-card-text>О пользователе</v-card-text>
    <div class="flex-grow-1"></div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["info"])
  },
  methods: {
    userInfo() {
      console.log(info);
    }
  }
};
<script />;
