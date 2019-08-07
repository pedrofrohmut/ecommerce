/*
 * parse a number value to a string that represents money
 */
export const formatMoney = function (price) {
  const floor = Math.floor(price)
  let rest = Math.floor((price - floor) * 100).toString()
  if (rest === "0") {
    rest = "00"
  }
  if (rest.length === 1) {
    rest = `0${rest}`
  }
  return `${floor},${rest}`
}

/*
 * Limit long text to fit in small spaces with a passed limit and an optional
 * 3 dots at the end
 */
export const limitText = function (text, limit, withFinalDots) {
  const result = text.substr(0, limit)
  if (withFinalDots && text.length > limit) {
    return `${result}... `
  }
  return result
}
