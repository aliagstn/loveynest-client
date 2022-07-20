import axios from "axios";
const baseUrl = "https://bb54-180-252-243-64.ngrok.io";

//? create quiz
export const create = (access_token) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let quiz = getState().form.Quiz;
        console.log(quiz, "<------------------ Quiz");
        let question1 = getState().form.question1;
        let question2 = getState().form.question2;
        let question3 = getState().form.question3;
        let question4 = getState().form.question4;
        let question5 = getState().form.question5;
          console.log(question1, "<------------------ question1");
          console.log(question2, "<------------------ question2");
          console.log(question3, "<------------------ question3");
          console.log(question4, "<------------------ question4");
          console.log(question5, "<------------------ question5");

        const response = await axios({
          method: "POST",
          url: `${baseUrl}/userquiz`,
          data: {
            quiz,
            question1,
            question2,
            question3,
            question4,
            question5
          },
          headers: {
            access_token,
          },
        });
        resolve();
      } catch (error) {
        console.log(error.response);
        reject(error);
      }
    });
  };
};

export const userQuizSuccess = (payload) => {
  return {
    type: "user/quiz",
    payload,
  };
};

export const userQuestion1 = (payload) => {
  return {
    type: "user/question1",
    payload,
  };
};

export const userQuestion2 = (payload) => {
  return {
    type: "user/question2",
    payload,
  };
};

export const userQuestion3 = (payload) => {
  return {
    type: "user/question3",
    payload,
  };
};

export const userQuestion4 = (payload) => {
  return {
    type: "user/question4",
    payload,
  };
};

export const userQuestion5 = (payload) => {
  return {
    type: "user/question5",
    payload,
  };
};
