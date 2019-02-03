export const state = () => ({
  items: [
    {id: 0, title: "I'm a long ass title! Hear me roar!", price: 999,
      img: 'https://via.placeholder.com/600/92c952', thumbnail: 'https://via.placeholder.com/150/92c952'},
    {id: 1, title: "I'm a title, 2!", price: 303,
      img: 'https://via.placeholder.com/600/771796', thumbnail: 'https://via.placeholder.com/150/771796'},
    {id: 2, title: "I'm a title, 3!", price: 444,
      img: 'https://via.placeholder.com/600/24f355', thumbnail: 'https://via.placeholder.com/150/24f355'},
    {id: 3, title: "I'm a title, 4!", price: 550,
      img: 'https://via.placeholder.com/600/d32776', thumbnail: 'https://via.placeholder.com/150/d32776'},
    {id: 4, title: "I'm a title, 5!", price: 666,
      img: 'https://via.placeholder.com/600/f66b97', thumbnail: 'https://via.placeholder.com/150/f66b97'},
  ],
  cart: [],
  itemsInCart: 0,
  priceTotal: 0,
})

//reads localStorage {id} item,
//returns an object with new data or with {key}: empty array
const readStorage = (id, key) => {
  let res = localStorage.getItem(id)
  if (res)  res = JSON.parse(res)
  else      res = {
              [key]: [],
            }
  return res
}

//stores data in localStorage
const setStorage = (id, key, data) => {
  localStorage.setItem(id, JSON.stringify({ [key]: data }))
}

//calculates the number of items and their total price
//based on data from the main collection
//if changed there, the cart will catch up and recalculate next time
const extrapolate = (items, cart) => {
  let itemsInCart = 0,
      priceTotal  = 0

  cart.map((item, i) => {
    itemsInCart += item.counter
    let index = items.findIndex(x => x.id === item.id)

    if (index > -1) {
      //read the price from store in case it changed
      if (items[index].price)
        priceTotal += (items[index].price * item.counter)
      //or from the cart item itself
      else
        priceTotal += (item.price * item.counter)
    }
  })

  return {
    itemsInCart:  itemsInCart,
    priceTotal:   priceTotal,
  }
}

export const mutations = {

  //gets cart content from localStorage
  fetch (state) {
    let storage = readStorage("vs_cart", "cart")

    state.cart = storage.cart

    let props = extrapolate(state.items, storage.cart)

    state.itemsInCart = props.itemsInCart
    state.priceTotal = props.priceTotal
  },

  //adds item to cart and updates localStorage
  add (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id)

    if (index > -1) {
      state.cart[index].counter++
      if (index > 0) {
        let newItem = Object.assign({}, state.cart[index])
        state.cart.splice(index, 1)
        state.cart.unshift(newItem)
      }
    } else
      state.cart.unshift({counter: 1, ...item})

    state.itemsInCart++
    state.priceTotal += item.price
    setStorage('vs_cart', 'cart', state.cart)
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
    state.priceTotal -= item.price
    setStorage('vs_cart', 'cart', state.cart)
  },

  //removes all items of this kind from cart and updates localStorage
  removeAllThese (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id)
    if (index == -1) return false

    let quantity = state.cart[index].counter

    state.cart.splice(index, 1)

    state.itemsInCart -= quantity
    state.priceTotal -= item.price * quantity
    setStorage('vs_cart', 'cart', state.cart)
  },

  //removes everything from cart and updates localStorage
  removeAll (state) {
    state.cart = []
    state.itemsInCart = 0
    state.priceTotal = 0
    setStorage('vs_cart', 'cart', state.cart)
  },
}
