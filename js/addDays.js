
const data =  new Date()
console.log(data.toLocaleDateString('pt-br').slice(0, 5))


const dias = 1

function addDays(data,dias){
  data.setDate(data.getDate() +dias)
  return data
}
const nextDay = addDays(data,dias)
console.log(nextDay.toLocaleDateString('pt-br').slice(0, 5))