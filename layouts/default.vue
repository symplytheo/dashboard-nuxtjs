<template>
  <v-app id="app">
    <Drawer v-model="drawer" :title="title" />
    <v-app-bar flat app absolute>
      <v-btn fab small class="hidden-md-and-up" @click.stop="drawer = !drawer">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-spacer />
      <v-text-field
        hide-details
        append-icon="mdi-magnify"
        single-line
        placeholder="Search..."
        style="max-width: 400px"
      />
      <v-btn icon height="40" width="40" to="/" class="mx-2">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-menu bottom left offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-badge
            :value="4"
            :content="5"
            bordered
            offset-x="18"
            offset-y="15"
            overlap
          >
            <v-btn icon height="40" width="40" v-on="on">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
          </v-badge>
        </template>
        <v-card>
          <v-list dense>
            <v-list-item
              v-for="notification in notifications"
              :key="notification"
              link
            >
              <v-list-item-title v-text="notification" />
            </v-list-item>
          </v-list>
          <v-divider />
          <v-card-actions class="pa-1">
            <v-btn text block color="primary" small to="/notifications">
              view all
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      <v-btn icon height="42" width="42" class="mx-2">
        <v-avatar size="42" color="grey lighten-2">
          <v-img src="/v.png" contain />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-footer app class="pa-3">
      <span class="subtitle-2">
        &copy; {{ new Date().getFullYear() }} {{ title }}
      </span>
    </v-footer>

    <!-- settings drawer toggler -->
    <v-btn
      fab
      absolute
      fixed
      right
      height="50"
      width="50"
      color="primary"
      style="top: 50%"
      @click="customize = !customize"
    >
      <v-icon>mdi-tools</v-icon>
    </v-btn>

    <Customizer v-model="customize" />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    customize: false,
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      "You're now a friend with Andrew",
      'Another Notification',
      'Another One',
    ],
    title: 'Vuetify.js',
  }),
}
</script>

<style>
.v-application {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
}

/* Vuetify typography helper classes font-family */
.v-application .display-4,
.v-application .display-3,
.v-application .display-2,
.v-application .display-1,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-1,
.v-application .body-2,
.v-application .caption {
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
}
</style>
