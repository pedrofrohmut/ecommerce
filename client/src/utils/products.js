const getRandomIndex = function (length) {
  return Math.floor(Math.random() * length)
}

export const getRandomProducts = function (products, amount) {
  const productsLength = products.length
  if (productsLength < amount) throw new Error("Invalid Amount")
  if (productsLength === amount) return products
  const result = []
  for (let i = 0; i < amount; i++) {
    let randomIndex = getRandomIndex(productsLength)
    const resultIds = result.map(product => product.id)
    while (resultIds.includes(products[randomIndex].id)) {
      randomIndex = getRandomIndex(productsLength)
    }
    result.push(products[randomIndex])
  }
  return result
}
