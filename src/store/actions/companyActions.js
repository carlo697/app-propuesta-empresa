export function setCompanyName(name) {
  return {
    type: "SET_COMPANY_NAME",
    payload: name,
  };
}

export function setType(type) {
  return {
    type: "SET_TYPE",
    payload: type,
  };
}

export function setStyle(style) {
  return {
    type: "SET_STYLE",
    payload: style,
  };
}

export function setImage(image) {
    return {
      type: "SET_IMAGE",
      payload: image,
    };
  }
  
