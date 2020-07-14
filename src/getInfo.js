let token = "";
let user_emp_id = "";

const getInfo = {
  setToken(param) {
    token = param;
    return token;
  },
  getToken() {
    return token;
  },
  setUser_emp_id(param) {
    user_emp_id = param;
    return user_emp_id;
  },
  getUser_emp_id() {
    return user_emp_id;
  },
};

export { getInfo as default };
