export let AsobiArray = []
export let total
export function score([value]){
  total = [value]
  localStorage.setItem('papan', total)
  AsobiArray.push(localStorage.getItem('papan'))
  return AsobiArray
}
