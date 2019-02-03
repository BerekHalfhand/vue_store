<template>
  <div class="item">
    <a v-bind:href="item.img" class="thumbnail">
      <img v-bind:src="item.img" />
    </a>
    <h4 class="box">{{ item.title }}</h4>
    <div class="info">
      <span class="sub-info">
        <div class="box">Price: {{ item.price }} $</div>
        <div v-if="isCart" class="box">In cart: {{ item.counter }}</div>
      </span>
      <span class="sub-info">
        <b-button class="float-right" variant="success" v-on:click="addItem(item)" v-if="!isCart">Add to cart</b-button>
        <b-button class="float-right" variant="danger" v-on:click="removeItem(item)" v-else>Remove</b-button>
      </span>
    </div>
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
          img: String,
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
