export const state = () => ({
  projects: [
  ],
  socials: [
    {
      name: 'twitter',
      icon: 'twitter.svg',
      link: 'https://twitter.com/burnallatonce'
    },
    {
      name: 'github',
      icon: 'github.svg',
      link: 'https://github.com/obsequey'
    },
    {
      name: 'telegram',
      icon: 'telegram.svg',
      link: ''
    },
    {
      name: 'facebook',
      icon: 'facebook.svg',
      link: ''
    }
  ]
})

export const mutations = {
  setProjects (state, list) {
    state.projects = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const files = await require.context('~/assets/content/projects/', false, /\.json$/)
    const projects = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setProjects', projects)
  }
}
