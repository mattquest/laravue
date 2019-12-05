const coreMixins = [
  {
    methods: {
      routeTo(name) {
        this.$store.dispatch("routeTo", { caller: this, name })
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
