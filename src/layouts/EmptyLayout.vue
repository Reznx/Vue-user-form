<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height">
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar">
          {{ error }}
          <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
        </v-snackbar>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    snackbar: false
  }),
  computed: {
    ...mapState(["error"])
  },
  watch: {
    error() {
      if (this.error) {
        this.snackbar = !!this.error;
      }
    }
  }
};
</script>
