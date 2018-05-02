const initialState = {
    orders: [ {id: 0 , name:'', price: 0, qty: 0 , total:0 }],
   
    isLoading: false,
    isError: false,
    isSaved: false,
  }
  
  const orderReducer = ( state = initialState, action ) => {
   
    switch (action.type) {
      case 'GET_ORDER_PENDING':
        return {...state, isLoading: true};
      case 'GET_ORDER':
        return {...state, isLoading: false, orders: action.payload.orders};
      case 'GET_ORDER_REJECTED':
        return {...state, isLoading: false, isError: true};
      case 'CREATE_ORDER':
        return {...state, isSaved: true,orders: action.payload}
      case 'CREATE_ORDER_REJECTED':
        return {...state, isError: true}    
      default:
        return state;
    }
  }
  
  export default orderReducer;