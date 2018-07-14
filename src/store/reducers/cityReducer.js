const initialState = { city: "New York" };

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CITY":
      return { ...state, city: action.city };
    default:
      return state;
  }
};

export default cityReducer;
