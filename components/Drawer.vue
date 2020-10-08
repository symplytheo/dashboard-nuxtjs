<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="drawer"
    app
    dark
    :color="color"
    floating
    :mobile-breakpoint="960"
  >
    <template v-slot:img>
      <v-img :src="useImage ? image : ''" height="100%" />
    </template>
    <v-list flat color="rgba(0,0,0,.3)">
      <v-list-item to="/">
        <v-list-item-avatar>
          <v-img :src="logo" height="30" width="30" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title text-uppercase font-weight-medium">
            {{ title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list color="transparent">
      <v-list-group no-action active-class="white--text">
        <template v-slot:activator>
          <v-list-item-avatar>
            <v-avatar color="white">
              <v-img :src="user.avatar" />
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="text-capitalize font-weight-regular"
              v-text="user.name"
            />
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(item, n) in ['my profile', 'edit profile', 'settings']"
          :key="n"
          link
        >
          <v-list-item-content>
            <v-list-item-title
              class="text-capitalize font-weight-regular"
              v-text="item"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
    <v-divider />
    <v-list nav color="transparent">
      <template v-for="(link, k) in links">
        <v-list-group
          v-if="link.items"
          :key="k"
          :prepend-icon="link.icon"
          active-class="white--text"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="text-capitalize font-weight-regular"
                v-text="link.title"
              />
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(child, d) in link.items"
            :key="d"
            :to="child.to"
            active-class="white--text primary"
          >
            <!-- <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title v-text="child.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item v-else :key="k" :to="link.to" active-class="primary">
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title
              class="text-capitalize font-weight-regular"
              v-text="link.title"
            />
          </v-list-item-content>
        </v-list-item>
      </template>
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
    user: {
      name: 'jane doe',
      avatar: '/v.png',
    },
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
    links() {
      return this.$store.state.links
    },
    image() {
      return this.$store.state.image
    },
    useImage() {
      return this.$store.state.useImage
    },
    color() {
      return this.$store.state.sidebarColor
    },
  },
}
</script>

<style>
#app-drawer .v-navigation-drawer__content {
  background: rgba(0, 0, 0, 0.5);
}
</style>
