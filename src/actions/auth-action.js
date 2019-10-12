export const inputChange = (field, value) => {
  return {
    type: "INPUT_CHANGE",
    payload: { field, value }
  };
};

export const login = (email, password) => {
  return {
    type: "SUBMIT"
  };
};
