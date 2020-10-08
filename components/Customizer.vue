<template>
  <v-navigation-drawer v-model="drawer" app temporary hide-overlay right>
    <v-list flat dark color="primary" class="py-0">
      <v-list-item @click="drawer = false">
        <v-list-item-icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="'Customization'" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- change primary color  -->
    <div class="text-center my-3">
      <div class="caption text-uppercase mb-2">primary color</div>
      <div>
        <v-btn
          v-for="c in colors"
          :key="c"
          fab
          depressed
          x-small
          :color="c"
          class="mx-1"
          @click="setPrimaryColor(c)"
        ></v-btn>
      </div>
    </div>

    <v-divider />

    <!-- change sidebar background color  -->
    <div class="text-center my-3">
      <div class="caption text-uppercase mb-2">sidebar background</div>
      <div>
        <v-btn
          v-for="c in colors"
          :key="c"
          fab
          depressed
          x-small
          :color="c"
          class="mx-1"
          @click="setSidebarColor(c)"
        ></v-btn>
      </div>
      <span class="font-weight-thin font-italic caption">
        *only if sidebar image is disabled
      </span>
    </div>

    <v-divider />

    <!-- change sidebar image  -->
    <v-container class="text-center">
      <span class="caption text-uppercase">sidebar image</span>
      <v-row justify="center">
        <v-col v-for="(img, i) in images" :key="i" cols="3" class="px-1">
          <v-card flat height="100" link @click="setImage(img)">
            <v-img :src="img" height="100%" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-2" />

    <!-- toggle dark mode, sidebar image, etc  -->
    <div>
      <div class="text-center caption text-uppercase mb-2">others</div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Dark Mode</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="$vuetify.theme.dark" />
        </v-list-item-action>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Sidebar Image</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="image" @change="allowSidebarImage" />
        </v-list-item-action>
      </v-list-item>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    image: true,
    images: ['bg-1.jpg', 'bg-2.jpg', 'bg-3.jpg'],
    colors: ['#3f51b5', '#b0bec5', '#8c9eff', '#b71c1c'],
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
  methods: {
    setPrimaryColor(color) {
      this.$vuetify.theme.themes.light.primary = color
      this.$vuetify.theme.themes.dark.primary = color
    },
    setSidebarColor(color) {
      this.$store.commit('setSidebarColor', color)
    },
    setImage(img) {
      this.$store.commit('setImage', img)
    },
    allowSidebarImage() {
      this.$store.commit('allowImage', this.image)
    },
  },
}
</script>

<style></style>
