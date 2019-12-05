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

if (process.env.ASSET_PATH) {
  coreMixins.push({
    methods: {
      asset(append) {
        return process.env.ASSET_PATH + append
      }
    }
  })
}

export default coreMixins
