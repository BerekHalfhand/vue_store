<template>
  <section>
    <article class="container">
      <Item title="I'm a long ass title! Hear me roar!" v-bind:price="999"/>
      <Item title="Title 2!" v-bind:price="333" />
      <Item title="Title 3!" v-bind:price="444" />
      <Item title="Hear me roar!" v-bind:price="7" />
    </article>
  </section>
</template>

<script>
import Item from '~/components/Item.vue'

export default {
  components: {
    Item
  }
}
</script>
