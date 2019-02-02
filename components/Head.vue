<template>
  <header>
    <logo />
    <span class="float-right nav-buttons">
      <nuxt-link to='/cart'>
        <b-button variant="warning">Cart</b-button>
      </nuxt-link>
      <nuxt-link to='/'>
        <b-button variant="warning">Home</b-button>
      </nuxt-link>
    </span>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
