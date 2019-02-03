<template>
  <section>
    <article class="container">
      <Item v-for="item in cart" v-bind:item="item" v-bind:isCart="true" :key="item.id" />
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
    cart () {
      return this.$store.state.itemsStore.cart
    }
  },
}
</script>
