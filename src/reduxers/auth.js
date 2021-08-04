const defaultState = {
  statusLogin: false,
  user: [
    {
      username: "joko",
      password: "admin",
    },
  ],
};

const authReducer = (state = defaultState, action) => {
  console.log("state:", state);
  console.log("action:", action.payload);
  switch (action.type) {
    case "LOGIN":
      return {
        ...state, // biar ga ganti data lama
        // username: action.payload.user,
        statusLogin: true,
      };
    case "register":
      return {
        ...state,
        user: [...state.user, action.payload.user[0]],
      };
    case "LOGOUT":
      return defaultState;
    default:
      return state;
  }
};

export default authReducer;
