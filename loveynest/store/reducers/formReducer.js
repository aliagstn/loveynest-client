const initialState = {
  Quiz: {},
  question1: {},
  question2: {},
  question3: {},
  question4: {},
  question5: {}
};
function formReducer(state = initialState, action) {
  switch (action.type) {
    case "user/quiz":
      return { ...state, Quiz: action.payload };
    case "user/question1":
      return { ...state, question1: action.payload };
    case "user/question2":
      return { ...state, question2: action.payload };
    case "user/question3":
      return { ...state, question3: action.payload };
    case "user/question4":
      return { ...state, question4: action.payload };
    case "user/question5":
      return { ...state, question5: action.payload };
    default:
      return state;
  }
}
export default formReducer;
