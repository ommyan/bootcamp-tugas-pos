const initialState = {
    transactions: [
     // { orderid:'',waiterid:'',userid:'',discount:0,tax:0,grandtotal:0}
    ],	
    isLoading: false,
    isSaved:false,
    isError: false
  }
  
  const transactionReducer = ( state = initialState, action ) => {
    switch (action.type) {
      case 'ALL_TRANSACTION_PENDING':
        return {...state, isLoading: true};
      case 'GET_TRANSACTION':
        return {...state, isLoading: false, transactions: action.payload};
      case 'ALL_TRANSACTION_REJECTED':
        return {...state, isLoading: false, isError: true};
      case "CREATE_TRANSACTION":
        return {...state, isSaved: true,transactions: action.payload}
      case "CREATE_TRANSACTION_REJECTED":
        return {...state, isError: true}  
      default:
        return state;
    }
  }
  
  export default transactionReducer;