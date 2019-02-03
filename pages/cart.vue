<template>
  <section>
    <article class="container">
      <ListItem v-for="item in cart"
                v-bind:item="item"
                v-bind:price="getPrice(item)"
                :key="item.id" />
      <div class="placeholder" v-if="cart.length == 0">
        <h1>Nobody here but us chickens</h1>
      </div>
    </article>
    <CartFooter />
  </section>
</template>

<script>
import ListItem from '~/components/ListItem.vue'
import CartFooter from '~/components/CartFooter.vue'

export default {
  components: {
    ListItem,
    CartFooter,
  },
  computed: {
    items () {
      return this.$store.state.items
    },
    cart () {
      return this.$store.state.cart
    },
  },
  methods: {
    getPrice(item) {
      return this.$getPrice(this.items, item)
    }
  }
}
</script>
