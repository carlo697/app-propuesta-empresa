const defaultState = {
  currentScreen: 0,
};

const screenReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  if (type === "SET_SCREEN") {
    return { ...state, currentScreen: payload };
  }

  return state;
};

export default screenReducer;
