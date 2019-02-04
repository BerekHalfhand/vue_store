import faker from 'faker'

//settings
const cartStorage   = ['vs_cart', 'cart']
const itemsStorage  = ['vs_items', 'items']

//default state
export const state = () => ({
  items: [],
  cart: [],
  itemsInCart: 0,
  priceTotal: 0,
})

// $readStorage, $setStorage and $getPrice are declared in the plugin
// ~/plugins/commonMethods.js

export const mutations = {
  //populates store with fake items or loads the existing items from localStorage
  storeInit (state) {
    let {items} = this.$readStorage(...itemsStorage)

    if (!items.length) {
      for (let i = 0; i < 50; i++) {
        items.push({
          id: i,
          title: faker.commerce.productName(),
          price: faker.commerce.price(),
          img: faker.random.image(),
        })
      }
      this.$setStorage(...itemsStorage, items)
    }

    state.items = items
  },

  //gets cart content from localStorage
  fetchCart (state) {
    let {cart} = this.$readStorage(...cartStorage)

    state.cart = cart

    let itemsInCart = 0,
        priceTotal  = 0

    state.cart.map((item, i) => {
      itemsInCart += item.counter
      priceTotal  += this.$getPrice(state.items, item) * item.counter
    })

    state.itemsInCart = itemsInCart
    state.priceTotal  = priceTotal
  },

  //adds item to cart and updates localStorage
  add (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id)

    if (index > -1)
      state.cart[index].counter++
    else
      state.cart.unshift({counter: 1, ...item})

    state.itemsInCart++
    state.priceTotal += parseFloat(item.price)
    this.$setStorage(...cartStorage, state.cart)
  },

  //removes 1 item from cart and updates localStorage
  remove (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id)
    if (index == -1) return false

    if (state.cart[index].counter > 1)
      state.cart[index].counter--
    else
      state.cart.splice(index, 1)

    state.itemsInCart--
    state.priceTotal -= this.$getPrice(state.items, item)
    this.$setStorage(...cartStorage, state.cart)
  },

  //removes all items of this kind from cart and updates localStorage
  removeAllThese (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id)
    if (index == -1) return false

    let quantity = state.cart[index].counter

    state.cart.splice(index, 1)

    state.itemsInCart -= quantity
    state.priceTotal  -= this.$getPrice(state.items, item) * quantity
    this.$setStorage(...cartStorage, state.cart)
  },

  //removes everything from cart and updates localStorage
  removeAll (state) {
    state.cart = []
    state.itemsInCart = 0
    state.priceTotal = 0
    this.$setStorage(...cartStorage, state.cart)
  },
}
