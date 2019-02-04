export default ({ app }, inject) => {
  //gets the actual price from the store
  //if not found, returns the same price that the item
  //had at the moment of addition to cart
  inject('getPrice', (items, item) => {
    let index = items.findIndex(x => x.id === item.id)
    if (index > -1) {
      //read the price from store in case it changed
      if (items[index].price)
        return parseFloat(items[index].price)
      //or from the cart item itself
      else
        return parseFloat(item.price)
    }
  })

  //reads localStorage {id} item,
  //returns an object with new data or with {key}: empty array
  inject('readStorage', (id, key) => {
    let res = localStorage.getItem(id)
    if (res)  res = JSON.parse(res)
    else      res = {
                [key]: [],
              }
    return res
  })

  //stores data in localStorage
  inject('setStorage', (id, key, data) => {
    localStorage.setItem(id, JSON.stringify({ [key]: data }))
  })
}
