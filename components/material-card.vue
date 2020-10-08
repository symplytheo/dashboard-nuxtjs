<template>
  <div>
    <v-card
      :color="background"
      :dark="dark"
      class="mx-auto pt-1"
      :width="width"
    >
      <!-- for icon  -->
      <div v-if="icon" class="px-2">
        <v-row>
          <v-col cols="4" class="pb-0 mb-0">
            <v-card
              class="v-sheet--offset py-5 text-center"
              :color="color"
              elevation="6"
              width="100%"
            >
              <v-icon size="50" color="white">{{ icon }}</v-icon>
            </v-card>
          </v-col>
          <v-col cols="8" class="text-right pa-5 pb-0">
            <div class="subtitle-1 font-weight-thin">
              {{ title }}
            </div>
            <div class="headline font-weight-regular">
              {{ subtitle }}
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- for stats  -->
      <v-sheet
        v-else-if="stats"
        :color="color"
        class="ma-3 mt-2 pa-5"
        style="border-radius: 5px"
      >
        <slot name="stats"></slot>
      </v-sheet>

      <!-- default: for info  -->
      <v-sheet
        v-else
        class="v-sheet--offset mx-auto"
        :color="color"
        elevation="6"
        max-width="calc(100% - 32px)"
        dark
        style="border-radius: 5px"
      >
        <div v-if="title || subtitle" class="py-2 px-5">
          <div class="title font-weight-medium text-capitalize">
            {{ title }}
          </div>
          <div class="font-weight-medium subtitle-1">
            {{ subtitle }}
          </div>
        </div>
        <slot v-else name="header"></slot>
      </v-sheet>

      <!-- main content -->
      <v-card-text class="pt-0 pb-2" style="margin-top: -10px">
        <slot></slot>
      </v-card-text>

      <!-- footer  -->
      <div v-if="footer">
        <v-divider />
        <v-card-text class="py-2">
          <slot name="footer"></slot>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: undefined,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    icon: {
      type: [Boolean, String],
      default: false,
    },
    color: {
      type: String,
      default: 'rgba(0,0,0,.2)',
    },
    title: {
      type: [String, Number],
      default: undefined,
    },
    subtitle: {
      type: [String, Number],
      default: undefined,
    },
    stats: {
      type: Boolean,
      default: false,
    },
    footer: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
