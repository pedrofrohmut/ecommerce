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
