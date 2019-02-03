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
    this.fetchStorage();
  },
  methods:{
    fetchStorage(){
      this.$store.commit('fetch')
    }
  }
}
</script>
