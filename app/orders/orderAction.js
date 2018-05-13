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
          orders:[]
        }
    }
    )


  }