const initialState = {
    profils: [],
    hl: [],
    isLoading: false,
    isError: false
  }
  
  const profilsReducer = ( state = initialState, action ) => {
    switch (action.type) {
      case 'ALL_PROFILES_PENDING':
        return {...state, isLoading: true};
      case 'ALL_PROFILES':
        return {...state, isLoading: false, profils: action.payload};
      case 'ALL_PROFILES_REJECTED':
        return {...state, isLoading: false, isError: true};
      case 'ALL_HL_PENDING':
        return {...state, isLoading: true};
      case 'ALL_HL':
        return {...state, isLoading: false, hl: action.payload};
      case 'ALL_HL_REJECTED':
        return {...state, isLoading: false, isError: true};  


      default:
        return state;
    }
  }
  
  export default profilsReducer;