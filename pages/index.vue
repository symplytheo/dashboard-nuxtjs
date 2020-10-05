<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(item, i) in alerts"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
          class="py-5"
        >
          <v-card class="px-2">
            <v-row>
              <v-col cols="5" sm="4" class="pb-0 mb-0">
                <v-card
                  class="v-sheet--offset mx-auto py-5 text-center"
                  color="primary"
                  elevation="6"
                  width="100%"
                >
                  <v-icon size="50" color="white">{{ item.icon }}</v-icon>
                </v-card>
              </v-col>
              <v-col cols="7" sm="8" class="text-right pa-5 pb-0 primary--text">
                <div class="subtitle-1 font-weight-bold text-uppercase">
                  {{ item.title }}
                </div>
                <div class="display-1 font-weight-bold">
                  {{ item.text }}
                </div>
              </v-col>
            </v-row>
            <v-card-text class="px-0 pt-0">
              <v-divider />
              <div class="pt-2">
                <v-icon left small color="primary">mdi-clock</v-icon>
                Updated at {{ Math.ceil(Math.random() * 6) }} minutes ago
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col v-for="w in 3" :key="w" cols="12" md="4">
          <v-card class="mt-4 mx-auto" max-width="400">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="primary"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="labels"
                :value="value"
                color="white"
                line-width="2"
                padding="16"
                class="white--text"
              ></v-sparkline>
            </v-sheet>

            <v-card-text class="pt-0">
              <div class="title font-weight-light mb-2">User Registrations</div>
              <div class="subheading font-weight-light grey--text">
                Last Campaign Performance
              </div>
              <v-divider class="my-2"></v-divider>
              <v-icon class="mr-2" small> mdi-clock </v-icon>
              <span class="caption grey--text font-weight-light">
                last registration 26 minutes ago
              </span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col v-for="i in 2" :key="i" cols="12" md="6">
          <v-card
            class="mx-auto text-center"
            color="primary"
            dark
            max-width="600"
          >
            <v-card-text>
              <v-sheet color="rgba(0,0,0,.12)">
                <v-sparkline
                  :value="value_2"
                  color="white"
                  height="100"
                  padding="24"
                  stroke-linecap="round"
                  smooth
                  fill
                  class="white--text"
                >
                  <template v-slot:label="item"> ${{ item.value }} </template>
                </v-sparkline>
              </v-sheet>
            </v-card-text>

            <v-card-text>
              <div class="headline font-weight-thin">Sales Last 24h</div>
            </v-card-text>

            <v-divider />

            <v-card-actions class="justify-center">
              <v-btn block text> Go to Report {{ i }} </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    alerts: [
      {
        title: 'Categories',
        text: 43,
        icon: 'mdi-tag-multiple',
      },
      {
        title: 'Facilities',
        text: 34,
        icon: 'mdi-office-building',
      },
      {
        title: 'Users',
        text: 24,
        icon: 'mdi-account-multiple',
      },
    ],
    labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
    value: [200, 675, 410, 390, 310, 460, 250, 240],
    value_2: [423, 446, 675, 510, 590, 610, 760],
  }),
}
</script>

<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
