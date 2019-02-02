export const state = () => ({
  items: [
    {id: 0, title: "I'm a long ass title! Hear me roar!", price: 999},
    {id: 1, title: "I'm a title, 2!", price: 333},
    {id: 2, title: "I'm a title, 3!", price: 444},
    {id: 3, title: "I'm a title, 4!", price: 555},
    {id: 4, title: "I'm a title, 5!", price: 666},
  ],
  cart: [],
  itemsInCart: 0,
})

export const mutations = {
  add (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id);

    if (index > -1)
      state.cart[index].counter++
    else
      state.cart.unshift({counter: 1, ...item})

    state.itemsInCart++
  },
  remove (state, item) {
    let index = state.cart.findIndex(x => x.id === item.id);
    if (index == -1) return false;

    if (state.cart[index].counter > 1)
      state.cart[index].counter--;
    else
      state.cart.splice(index, 1)

    state.itemsInCart--
  },
}
