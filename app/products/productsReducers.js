const initialState = {
  products: [],
  isLoading: false,
  isError: false
}

const productsReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_PENDING':
      return {...state, isLoading: true};
    case 'ALL_PRODUCTS_FULFILLED':
      return {...state, isLoading: false, products: action.payload.data.product};
    case 'ALL_PRODUCTS_REJECTED':
      return {...state, isLoading: false, isError: true};
    default:
      return state;
  }
}

export default productsReducer;