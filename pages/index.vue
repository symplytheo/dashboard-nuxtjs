<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="(item, i) in alerts"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
          class="py-5"
        >
          <material-card
            :icon="item.icon"
            :color="item.color"
            :title="item.title"
            :subtitle="item.subtitle"
            footer
          >
            <template #footer>
              <v-icon left small :color="item.footer_icon_color">
                {{ item.footer_icon }}
              </v-icon>
              <span> {{ item.footer_text }} </span>
            </template>
          </material-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="item in stats.slice(0, 2)"
          :key="item.id"
          cols="12"
          md="6"
        >
          <material-card :color="item.color" footer>
            <template v-slot:header>
              <div class="pa-3">
                <v-sparkline
                  :labels="item.labels"
                  :value="item.value"
                  color="white"
                  :line-width="item.line_width"
                  smooth
                  height="100"
                  stroke-linecap="round"
                  :type="item.type"
                  padding="16"
                ></v-sparkline>
              </div>
            </template>
            <div class="title font-weight-light mb-2">{{ item.title }}</div>
            <div class="subtitle-1 font-weight-light grey--text">
              {{ item.subtitle }}
            </div>
            <template #footer>
              <v-icon class="mr-2" small> {{ item.footer_icon }} </v-icon>
              <span class="grey--text font-weight-light">
                {{ item.footer_text }}
              </span>
            </template>
          </material-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="stat in stats.slice(2, 4)"
          :key="stat.id"
          cols="12"
          md="6"
        >
          <material-card :background="stat.color" stats footer dark>
            <template #stats>
              <v-sparkline
                :value="stat.value"
                color="white"
                height="100"
                padding="20"
                stroke-linecap="round"
                class="white--text"
                smooth
                fill
              >
                <template v-slot:label="item"> ${{ item.value }} </template>
              </v-sparkline>
            </template>

            <div class="text-center py-3">
              <div class="headline font-weight-thin">{{ stat.title }}</div>
            </div>

            <template #footer>
              <v-btn block text> Go to Report </v-btn>
            </template>
          </material-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <div class="headline font-weight-regular ma-5">Manage Listing</div>
      <v-slide-group>
        <v-slide-item v-for="(item, m) in 8" :key="m" class="ma-5">
          <material-card :width="350" footer>
            <template v-slot:header>
              <v-card flat>
                <v-img src="/bg-3.jpg" height="175" />
              </v-card>
            </template>
            <div class="text-center py-2">
              <div class="body-1 text--primary">Cozy 5 Stars Apartment</div>
              <div class="body-2 font-weight-thin">
                This place is close to barcelona beach and is just 2 minutes
                walk away and also near the best night club in the town.
              </div>
            </div>
            <template #footer>
              <div>
                <span class="subtitle-1">$899/night</span>
                <span class="float-right caption">
                  <v-icon x-small>mdi-map-marker</v-icon>
                  Barcelona, Spain
                </span>
              </div>
            </template>
          </material-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    alerts: [
      {
        title: 'Followers',
        subtitle: '+245',
        icon: 'mdi-twitter',
        color: 'blue lighten-1',
        footer_icon: 'mdi-clock',
        footer_icon_color: '',
        footer_text: 'Just updated',
      },
      {
        title: 'Website Visits',
        subtitle: 75.521,
        icon: 'mdi-chart-bar',
        color: 'pink',
        footer_icon: 'mdi-tag',
        footer_icon_color: '',
        footer_text: 'Tracked from Google Analytics',
      },
      {
        title: 'Revenue',
        subtitle: '$ 34,245',
        icon: 'mdi-cash-multiple',
        color: 'green',
        footer_icon: 'mdi-rocket-launch',
        footer_icon_color: 'green',
        footer_text: 'Last 24 Hours',
      },
      {
        title: 'Bookings',
        subtitle: '184',
        icon: 'mdi-sofa',
        color: 'amber darken-3',
        footer_icon: 'mdi-alert',
        footer_icon_color: 'error',
        footer_text: 'Get More Space...',
      },
    ],
    stats: [
      {
        id: 1,
        title: 'Website Views',
        subtitle: 'Last Campaign Performance',
        color: 'pink',
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        value: [400, 500, 450, 200, 675, 410, 390, 310, 460, 250, 240, 768],
        line_width: 15,
        type: 'bars',
        footer_icon: 'mdi-clock',
        footer_text: 'updated 10 minutes ago',
      },
      {
        id: 2,
        title: 'Daily Sales',
        subtitle: "55% increase in today's sales",
        color: 'green',
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        value: [10, 14, 6, 18, 22, 19, 39],
        line_width: 2,
        type: 'trend',
        footer_icon: 'mdi-clock',
        footer_text: 'updated 10 minutes ago',
      },
      {
        id: 3,
        title: 'Daily Sales',
        subtitle: "55% increase in today's sales",
        color: 'amber darken-3',
        labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
        value: [200, 675, 410, 390, 310, 460, 250, 240],
        line_width: 2,
        type: 'trend',
        footer_icon: 'mdi-clock',
        footer_text: 'updated 10 minutes ago',
      },
      {
        id: 4,
        title: 'Daily Sales',
        subtitle: "55% increase in today's sales",
        color: 'blue lighten-2',
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        value: [10, 14, 6, 18, 22, 19, 39],
        line_width: 2,
        type: 'trend',
        footer_icon: 'mdi-clock',
        footer_text: 'updated 10 minutes ago',
      },
    ],
  }),
}
</script>
