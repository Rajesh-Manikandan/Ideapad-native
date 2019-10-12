const initialState = {
  email: "",
  password: "",
  user: null,
  error: "",
  isLoading: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      return { ...state, isLoading: true };
    case "INPUT_CHANGE":
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
};

export default AuthReducer;
