<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link exact :to="{ name: 'Home' }">
          <!-- <router-link :to="{ name: 'home' }"> -->
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <!-- </router-link> -->
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'About' }">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Weather Buddy</v-toolbar-title>
    </v-app-bar>

    <v-main class="main">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center full-height">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="primary" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  beforeCreate: function() {
    console.log("before create");
    this.$store.commit("initializeStore");
  }
};
</script>

<style scoped>
.main {
  background: rgb(128, 191, 233);
  background: linear-gradient(29deg, rgba(128, 191, 233, 1) 0%, rgba(222, 250, 255, 1) 100%);
}
.router-link-exact-active {
  color: #42b983;
}

.full-height {
  min-height: calc(100vh - 130px);
}
</style>
