<template>
  <div class="item">
    <section class="thumbnail-section">
      <a v-bind:href="item.img" class="img-container">
        <img v-bind:src="item.img" />
      </a>
    </section>
    <section class="info-section">
      <div class="title-container">
        <h4 class="box">{{ item.title }}</h4>
      </div>
      <div class="info">
        <span class="sub-info">
          <div class="box">Price: {{ item.price }} $</div>
        </span>
        <span class="button-container">
          <b-button class="float-right" variant="success" v-on:click="addItem(item)">Add to cart</b-button>
        </span>
      </div>
    </section>
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
          img: String,
        }
      }
    },
  },
  methods: {
    addItem (item) {
      this.$store.commit('add', item)
    },
  }
}
</script>
