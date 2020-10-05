<template>
  <div>
    <v-toolbar
      color="transparent"
      dense
      class="primary--text mt-2 mb-5"
      elevation="0"
    >
      <v-icon large class="mr-2" color="primary">mdi-account-multiple</v-icon>
      <v-toolbar-title class="font-weight-bold">
        Users <span class="subtitle-2"> ({{ users.length }}) </span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn color="primary" class="text-capitalize" @click="dialog = true">
        Add User
      </v-btn>
    </v-toolbar>

    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card>
        <v-toolbar color="transparent" dense flat>
          <v-toolbar-title class="font-weight-bold">
            Add New User
          </v-toolbar-title>
          <v-spacer />
          <v-btn icon color="primary" @click.stop="dialog = !dialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pt-0">
          <v-form v-model="addUserForm">
            <v-row>
              <v-col cols="12" class="py-0">
                <v-select
                  v-model="role"
                  label="Select Role"
                  :items="['USER', 'ADMIN']"
                  :rules="[(v) => !!v || 'Role is required']"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="firstname"
                  label="First Name"
                  counter="32"
                  :rules="[
                    (v) => !!v || 'First name is required',
                    (v) =>
                      (!!v && v.length <= 32) || 'Not more than 32 characters',
                  ]"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="lastname"
                  label="Last Name"
                  counter="32"
                  :rules="[
                    (v) => !!v || 'Last name is required',
                    (v) =>
                      (!!v && v.length <= 32) || 'Not more than 32 characters',
                  ]"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="[(v) => !!v || 'Email is required']"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="password"
                  label="Password"
                  :type="showPwd ? 'text' : 'password'"
                  :append-icon="showPwd ? 'mdi-eye-off' : 'mdi-eye'"
                  :rules="[
                    (v) => !!v || 'Password is required',
                    (v) => (!!v && v.length >= 8) || 'At least 8 characters',
                  ]"
                  @click:append="showPwd = !showPwd"
                />
              </v-col>
              <v-col cols="12">
                <v-btn
                  block
                  large
                  depressed
                  :loading="loading"
                  :disabled="!addUserForm"
                  color="primary"
                  @click="addUser"
                >
                  Add User
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <div class="my-10" />

    <material-card
      :title="'All Users'"
      :subtitle="`List of all ${users.length} active users`"
    >
      <v-card-text class="px-10" style="margin-top: -30px">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th
                  v-for="i in ['s/n', 'name', 'email', 'role', '']"
                  :key="i"
                  class="text-uppercase primary--text"
                >
                  {{ i }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, u) in users" :key="u" class="tablerow">
                <td>{{ u + 1 }}</td>
                <td class="text-capitalize">
                  {{
                    user.firstname !== null
                      ? user.firstname + ' ' + user.lastname
                      : '--- ---'
                  }}
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>
                  <!-- Update user dialogs -->
                  <v-dialog v-model="menu[u]" max-width="600">
                    <template v-slot:activator="{ on }">
                      <v-btn text small color="primary" v-on="on"> Edit </v-btn>
                    </template>
                    <v-card>
                      <v-toolbar color="transparent" dense flat>
                        <v-toolbar-title class="font-weight-medium">
                          Edit User -
                          <span class="text-capitalize">
                            {{ user.firstname }}
                          </span>
                        </v-toolbar-title>
                      </v-toolbar>
                      <v-card-text class="pt-0">
                        <v-form>
                          <v-row>
                            <v-col cols="12" class="py-0">
                              <v-select
                                v-model="user.role"
                                label="Role"
                                :items="['USER', 'ADMIN']"
                                :rules="[(v) => !!v || 'Role is required']"
                              />
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-text-field
                                v-model="user.firstname"
                                label="First name"
                                counter="32"
                                :rules="[
                                  (v) => !!v || 'First name is required',
                                  (v) =>
                                    (!!v && v.length <= 32) ||
                                    'Not more than 32 characters',
                                ]"
                              />
                            </v-col>
                            <v-col cols="12" class="pt-0">
                              <v-text-field
                                v-model="user.lastname"
                                label="Last name"
                                counter="32"
                                :rules="[
                                  (v) => !!v || 'Last name is required',
                                  (v) =>
                                    (!!v && v.length <= 32) ||
                                    'Not more than 32 characters',
                                ]"
                              />
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                v-model="user.email"
                                label="Email"
                                :rules="[(v) => !!v || 'Email is required']"
                              />
                            </v-col>
                            <v-col cols="12">
                              <v-btn
                                block
                                large
                                depressed
                                :loading="loading"
                                color="primary"
                                @click="updateUser(user, u)"
                              >
                                Edit User
                              </v-btn>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <v-row>
        <v-col class="text-center py-0">
          <v-pagination
            :value="1"
            :length="10"
            :total-visible="5"
            color="primary"
            circle
            class="ma-2 pagination"
          />
        </v-col>
      </v-row>
    </material-card>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data: () => ({
    users: [
      {
        firstname: 'jane',
        lastname: 'doe',
        email: 'jane@doe.com',
        role: 'ADMIN',
      },
      {
        firstname: 'bode',
        lastname: 'thomas',
        email: 'bode@www.com',
        role: 'USER',
      },
    ],
    dialog: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    showPwd: false,
    loading: false,
    addUserForm: false,
    menu: [],
  }),
  methods: {
    addUser() {
      this.loading = true
      const user = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        role: this.role,
      }
      setTimeout(() => this.users.push(user), 1500)
      setTimeout(() => {
        this.loading = false
      }, 2000)
      setTimeout(() => {
        this.dialog = false
      }, 2100)
    },
    updateUser(user, u) {
      this.loading = true
      setTimeout(() => {
        this.menu[u] = false
      }, 2000)
      setTimeout(() => {
        this.loading = false
      }, 2100)
    },
  },
}
</script>

<style scoped>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
