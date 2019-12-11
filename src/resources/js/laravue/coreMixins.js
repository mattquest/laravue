const coreMixins = [
  {
    methods: {
      routeTo(name) {
        if (this.$route.name !== name) {
          this.$router.push({ name })
        }
      }
    }
  }
]

/**
 * allow for setting asset path in webpack.mix.js file
 */
coreMixins.push({
  methods: {
    asset(append) {
      return (process.env.ASSET_PATH || "/") + append
    }
  }
})

export default coreMixins
