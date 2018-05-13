import axios from 'axios'
import {SERVER_URL} from '../../app/configs/config'


export function allCategory(){
  console.log('url',SERVER_URL)
  const url = `http://192.168.1.16:5000/categories`
  return {
    type: "ALL_CATEGORY",
    payload: axios.get(url)
  }
}