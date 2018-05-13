const initialState = {
  category: [],
  isLoading: false,
  isError: false
}

const categoryReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'ALL_CATEGORY_PENDING':
      return {...state, isLoading: true};
    case 'ALL_CATEGORY_FULFILLED':
      return {...state, isLoading: false, category: action.payload.data.category};
    case 'ALL_CATEGORY_REJECTED':
      return {...state, isLoading: false, isError: true};
    default:
      return state;
  }
}

export default categoryReducer;