const initialState = {
  user: {},
  partner: {},
  urlProfPicUser: "",
  userData: {},
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case "user/userLoggedIn":
      return { ...state, user: action.payload };
    case "partner/partnerAdded":
      return { ...state, partner: action.payload };
    case "profpic/profpicAdded":
      return { ...state, urlProfPicUser: action.payload };
    case "userData/userDataFetched":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
export default userReducer;
