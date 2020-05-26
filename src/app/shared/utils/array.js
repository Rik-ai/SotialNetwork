export const sortByName = (a, b) => a.name.toLowerCase() > b.name.toLowerCase()
  ? 1
  : a.name.toLowerCase() < b.name.toLowerCase()
    ? -1
    : 0

export const map = (array, callback) => {
  const output = []

  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    const result = callback(item, i, array)

    output.push(result)
  }
  return output
}

export const filter = (array, callback) => {
  const output = []

  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    const isSuccess = callback(item, i, array)

    if(isSuccess) {
      output.push(item)
    }
  }
  return output
}

export const forEach = (array, callback) => {
  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    callback(item, i, array)
  }
}

export const every = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback.call(context, array[i], i, array))
      return false
  }
  return true
}

export const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback.call(context, array[i], i, array))
      return true
  }
  return false
}

export const find = (array, callback) => {
  let output

  for(let i = 0; i < array.length; i++) {
    const item = array[i]
    const isSuccess = callback(item, i, array)

    if(isSuccess) {
      output = item
      break
    }
  }

  return output
}
