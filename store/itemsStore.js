export const state = () => ({
  items: [
    {id: 0, title: "I'm a long ass title! Hear me roar!", price: 999,
      img: 'https://via.placeholder.com/600/92c952', thumbnail: 'https://via.placeholder.com/150/92c952'},
    {id: 1, title: "I'm a title, 2!", price: 333,
      img: 'https://via.placeholder.com/600/771796', thumbnail: 'https://via.placeholder.com/150/771796'},
    {id: 2, title: "I'm a title, 3!", price: 444,
      img: 'https://via.placeholder.com/600/24f355', thumbnail: 'https://via.placeholder.com/150/24f355'},
    {id: 3, title: "I'm a title, 4!", price: 555,
      img: 'https://via.placeholder.com/600/d32776', thumbnail: 'https://via.placeholder.com/150/d32776'},
    {id: 4, title: "I'm a title, 5!", price: 666,
      img: 'https://via.placeholder.com/600/f66b97', thumbnail: 'https://via.placeholder.com/150/f66b97'},
  ],
  cart: [],
  itemsInCart: 0,
})

export const mutations = {
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
  },
  remove (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id)
    if (index == -1) return false;

    if (state.cart[index].counter > 1)
      state.cart[index].counter--;
    else
      state.cart.splice(index, 1)

    state.itemsInCart--
  },
  removeAllThese (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id)
    if (index == -1) return false;

    let quantity = state.cart[index].counter

    state.cart.splice(index, 1)

    state.itemsInCart -= quantity
  },
}
