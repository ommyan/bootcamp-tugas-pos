import axios from 'axios'

export function allProduct(id){
  const url = `http://192.168.1.8:5000/products/${id}`
  return {
    type: "ALL_PRODUCTS",
    payload: axios.get(url)
  }
}