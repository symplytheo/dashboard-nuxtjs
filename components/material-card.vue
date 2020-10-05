<template>
  <div>
    <v-card class="mt-5 mx-auto">
      <v-sheet
        class="v-sheet--offset mx-auto py-2 px-5"
        color="primary"
        elevation="12"
        max-width="calc(100% - 32px)"
        dark
        style="border-radius: 5px"
      >
        <div class="title font-weight-medium text-capitalize">
          {{ title }}
        </div>
        <div class="font-weight-medium subtitle-1">
          {{ subtitle }}
        </div>
      </v-sheet>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    title: {
      type: String,
      default: 'title',
    },
    subtitle: {
      type: String,
      default: 'subtitle',
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
