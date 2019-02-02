<template>
  <div class="item">
    <div class="thumbnail"></div>
    <h4 class="box">{{ item.title }}</h4>
    <span class="d-inline-block">
      <span>Price: {{ item.price }}$</span>
      <br />
      <span v-if="isCart">In cart: {{ item.counter }}</span>
    </span>
    <b-button class="float-right" variant="success" v-on:click="addItem(item)" v-if="!isCart">Add to cart</b-button>
    <b-button class="float-right" variant="danger" v-on:click="removeItem(item)" v-else>Remove from cart</b-button>
  </div>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          title: 'Unnamed Item',
          price: 0,
          id: Number,
          counter: Number,
        }
      }
    },
    isCart: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    addItem (item) {
      this.$store.commit('itemsStore/add', item)
    },
    removeItem (item) {
      this.$store.commit('itemsStore/remove', item)
    },
  }
}
</script>
