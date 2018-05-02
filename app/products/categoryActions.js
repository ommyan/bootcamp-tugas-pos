import axios from 'axios'

export function allCategory(){
  const url = `http://192.168.1.8:5000/categories`
  return {
    type: "ALL_CATEGORY",
    payload: axios.get(url)
  }
}