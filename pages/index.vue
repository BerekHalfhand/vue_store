<template>
  <section>
    <article class="container grid">
      <Item v-for="item in items" v-bind:item="item" :key="item.id" />
    </article>
  </section>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
  components: {
    Item
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
}
</script>
