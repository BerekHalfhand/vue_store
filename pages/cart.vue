<template>
  <section>
    <article class="container">
      <ListItem v-for="item in cart" v-bind:item="item" :key="item.id" />
      <div class="placeholder" v-if="cart.length == 0">
        <h1>Nobody here but us chickens</h1>
      </div>
    </article>
  </section>
</template>

<script>
import ListItem from '~/components/ListItem.vue'

export default {
  components: {
    ListItem
  },
  computed: {
    cart () {
      return this.$store.state.itemsStore.cart
    }
  },
}
</script>
