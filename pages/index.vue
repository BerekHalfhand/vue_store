<template>
  <section>
    <article class="container">
      <Item v-for="item in items" v-bind:item="item" :key="item.id" />
    </article>
  </section>
</template>

<script>
import Item from '~/components/Item.vue'
//import { mapMutations } from 'vuex'

export default {
  components: {
    Item
  },
  computed: {
    items () {
      return this.$store.state.itemsStore.items
    }
  },
}
</script>
