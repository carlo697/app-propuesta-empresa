const defaultState = {
  name: "",
  type: "",
  style: "",
  image: null,
};

const companyReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  if (type === "SET_COMPANY_NAME") {
    return { ...state, name: payload };
  }

  if (type === "SET_TYPE") {
    return { ...state, type: payload };
  }

  if (type === "SET_STYLE") {
    return { ...state, style: payload };
  }

  if (type === "SET_IMAGE") {
    return { ...state, image: payload };
  }

  return state;
};

export default companyReducer;
