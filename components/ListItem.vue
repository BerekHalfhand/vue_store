<template>
  <div class="list-item">
    <section class="thumbnail-section">
      <a v-bind:href="item.img" class="thumbnail">
        <img v-bind:src="item.thumbnail" />
      </a>
    </section>
    <section class="info-section">
      <div class="title-container">
        <h4 class="box">{{ item.title }}</h4>
      </div>
      <div class="info">
        <span class="sub-info">
          <div class="box">Price: {{ price }} $</div>
          <div class="box">In cart:
            <b-button variant="outline-danger" size="sm" v-on:click="removeItem(item)">
              -
            </b-button>
            {{ item.counter }}
            <b-button variant="outline-success" size="sm" v-on:click="addItem(item)">
              +
            </b-button>
          </div>
        </span>
        <span class="button-container">
          <b-button class="float-right" variant="danger" v-if="item.counter > 1"
                    v-on:click="removeTheseItems(item)">Remove all {{item.counter}}
          </b-button>
          <b-button class="float-right" variant="danger"
                    v-on:click="removeItem(item)">Remove one
          </b-button>
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
          id: Number,
          counter: Number,
          img: String,
          thumbnail: String,
        }
      }
    },
    price: Number
  },
  methods: {
    addItem (item) {
      this.$store.commit('add', item)
    },
    removeItem (item) {
      this.$store.commit('remove', item)
    },
    removeTheseItems (item) {
      this.$store.commit('removeAllThese', item)
    },
  }
}
</script>
