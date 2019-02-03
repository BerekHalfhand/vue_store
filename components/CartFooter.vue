<template>
  <footer>
    <span class="text-node">In cart: {{itemsInCart}} items</span>
    <span class="text-node">Total price: {{priceTotal}} $</span>
    <span class="button-container">
      <b-button variant="danger" v-bind:disabled="itemsInCart < 1"
                v-on:click="removeAll">Clear
      </b-button>
    </span>
  </footer>
</template>

<script>
export default {
  computed: {
    itemsInCart () {
      return this.$store.state.itemsInCart
    },
    priceTotal () {
      return this.$store.state.priceTotal
    }
  },
  methods: {
    removeAll () {
      this.$store.commit('removeAll')
    },
  }
}
</script>
