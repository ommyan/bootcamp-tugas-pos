import axios from 'axios'


function sum(numbers){
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i].Total
  }
  return sum
}
export function CreateTransaction(data){
  console.log('data',data)
  return {
  type: "CREATE_TRANSACTION",
  payload: data
  }
}
export function getTransaction() {
  return{
     type:"GET_TRANSACTION",
      payload: {
        transactions:[]
      }
  }
  }