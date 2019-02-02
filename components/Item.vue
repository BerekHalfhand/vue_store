<template>
  <div class="item">
    <div class="thumbnail"></div>
    <h4 class="box">{{ title }}</h4>
    <span>Price: {{price}}$</span>
    <b-button class="float-right" variant="success">Add to cart</b-button>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Unnamed Item'
    },
    price: {
      type: Number,
      isRequired: true
    },
  }
}
</script>

<style>
.item {
  width: 300px;
  height: 300px;
  border: solid rgba(200,200,200) 1px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.25);
  padding: 5px;
}

.thumbnail {
  width: 100%;
  height: 200px;
  background-color: green;
}

</style>
