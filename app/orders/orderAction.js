import axios from 'axios'

export function CreateOrder(data){
 
 return(
  {type: "CREATE_ORDER", payload: data}
 ) 
} 


export function getOrder1() {
  let orders=[];
    return (dispatch, getState) => {
      const state = getState()
      if (getOrder(state)) return null;
  
      get()
        .then((response) => {
          orders=Array(response)
          dispatch({
            type: "GET_ORDER",
            payload: {
              orders: orders
            }
          });
        });
    }
  } 

  export function getOrder() {
    
    return(
      { type:"GET_ORDER",
        payload: {
          orders: [ 
            // {id: 1 , name:'Nasi Goreng', price: 25000, qty: 1 , total:25000},
            // {id: 2 , name:'Nasi Goreng', price: 25000, qty: 1 , total:25000}
          ]
        }
    }
    )


  }