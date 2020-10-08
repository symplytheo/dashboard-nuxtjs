export const state = () => ({
  image: '/bg-2.jpg',
  useImage: true,
  sidebarColor: 'primary',
  links: [
    {
      to: '/',
      icon: 'mdi-view-dashboard',
      title: 'Dashboard',
    },
    {
      to: '/users',
      icon: 'mdi-account-multiple',
      title: 'Users',
    },
    {
      icon: 'mdi-clipboard-outline',
      title: 'Table List',
      items: [{ title: 'List Item', to: '/table-list' }],
    },
    {
      to: '/icons',
      icon: 'mdi-chart-bubble',
      title: 'Icons',
    },
    {
      icon: 'mdi-map-marker',
      title: 'Maps',
      items: [
        { title: 'List Item', to: '/maps' },
        { title: 'List Item', to: '/table-list' },
      ],
    },
    {
      to: '/notifications',
      icon: 'mdi-bell',
      title: 'Notifications',
    },
  ],
})

export const mutations = {
  setSidebarColor(state, color) {
    state.sidebarColor = color
  },
  setImage(state, img) {
    state.image = img
  },
  allowImage(state, val) {
    state.useImage = val
  },
}
