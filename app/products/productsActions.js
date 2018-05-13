import axios from 'axios'
import {SERVER_URL} from '../../app/configs/config'

export function allProduct(id){
  const url = `http://192.168.1.16:5000/products/${id}`
  return {
    type: "ALL_PRODUCTS",
    payload: axios.get(url)
  }
}