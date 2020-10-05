<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    src="/bg-1.jpg"
    floating
    :mobile-breakpoint="960"
  >
    <v-list flat color="rgba(0,0,0,0.5)">
      <v-list-item to="/">
        <v-list-item-avatar>
          <v-img :src="logo" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline text-uppercase font-weight-black">
            {{ title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list nav color="rgba(0,0,0,0.3)">
      <v-list-item
        v-for="(item, i) in links"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Vuetify',
    },
    logo: {
      type: String,
      default: '/v.png',
    },
  },
  data: () => ({
    links: [
      {
        to: '/',
        icon: 'mdi-view-dashboard',
        text: 'Dashboard',
      },
      {
        to: '/users',
        icon: 'mdi-account-multiple',
        text: 'Users',
      },
      {
        to: '/table-list',
        icon: 'mdi-clipboard-outline',
        text: 'Table List',
      },
      {
        to: '/icons',
        icon: 'mdi-chart-bubble',
        text: 'Icons',
      },
      {
        to: '/maps',
        icon: 'mdi-map-marker',
        text: 'Maps',
      },
      {
        to: '/notifications',
        icon: 'mdi-bell',
        text: 'Notifications',
      },
    ],
  }),
  computed: {
    drawer: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style></style>
