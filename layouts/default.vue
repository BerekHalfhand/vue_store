<template>
  <article>
    <Head />
    <nuxt />
  </article>
</template>

<script>
import Head from '~/components/Head.vue'

export default {
  components: {
    Head
  },
  mounted() {
    this.storeInit()
    this.fetchCart()
  },
  methods:{
    fetchCart(){
      this.$store.commit('fetchCart')
    },
    storeInit(){
      this.$store.commit('storeInit')
    },
  }
}
</script>
