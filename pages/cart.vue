<template>
  <section>
    <article class="container">
      <ListItem v-for="item in cart" v-bind:item="item" :key="item.id" />
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
    cart () {
      return this.$store.state.itemsStore.cart
    }
  },
}
</script>
