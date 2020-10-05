<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <material-card
          :color="'success'"
          :title="'Notifications'"
          :subtitle="`You've got ${notifications.length} new notifications`"
        >
          <v-alert
            v-for="n in notifications"
            :key="n"
            dark
            color="primary"
            dismissible
            class="ma-5 pa-2"
          >
            {{ n }} <br />
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi. Vivamus quis mi. Quisque ut nisi. Maecenas malesuada.
          </v-alert>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    notifications: [
      'Mike, John responded to your email',
      'You have 5 new tasks',
      "You're now a friend with Andrew",
      'Another Notification',
      'Another One',
    ],
  }),
}
</script>

<style></style>
