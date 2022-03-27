export const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1)
}

export const sortByKey = (array, key) => {
  return array.sort((a, b) => {
    var x = a[key]
    var y = b[key]
    return x > y ? -1 : x < y ? 1 : 0
  })
}
