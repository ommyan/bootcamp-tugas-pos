const initialState = {
    transactions: [],
    payments:[],	
    isLoading: false,
    isSaved:false,
    isError: false

  }
  
  const transactionReducer = ( state = initialState, action ) => {
    switch (action.type) {
      case 'ALL_TRANSACTION_PENDING':
        return {...state, isLoading: true};
      case 'GET_TRANSACTION':
        return {...state, isLoading: false, transactions: action.payload.transactions};
      case 'ALL_TRANSACTION_REJECTED':
        return {...state, isLoading: false, isError: true};
      case "CREATE_TRANSACTION":
        return {...state, isSaved: true,transactions: action.payload}
      case "CREATE_TRANSACTION_REJECTED":
        return {...state, isError: true}    
      case "CREATE_PAYMENT":
        return {...state, isSaved: true,payments: action.payload}  
      case 'GET_PAYMENT':
        return {...state, isLoading: false, payments: action.payload};
      default:
        return state;
    }
  }
  
  export default transactionReducer;