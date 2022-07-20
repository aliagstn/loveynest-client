import axios from "axios";
const baseUrl = "https://8425-180-252-243-64.ngrok.io";

// register user
export const register = ({ email, password }) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(email, password);
        const response = await axios({
          method: "POST",
          url: `${baseUrl}/users`,
          data: {
            email,
            password,
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

// login user
export const userLoggedInSuccess = (payload) => {
  return {
    type: "user/userLoggedIn",
    payload,
  };
};
export const login = ({ email, password }) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "POST",
          url: `${baseUrl}/users/login`,
          data: {
            email,
            password,
          },
        });
        //   console.log(response.data.data)
        await dispatch(userLoggedInSuccess(response.data.data));
        resolve(response.data.data);
      } catch (error) {
        console.log(error.response);
        reject(error);
      }
    });
  };
};

//upload image to cloudinary
export const userAddedPhotoProfile = (payload) => {
  return {
    type: "profpic/profpicAdded",
    payload,
  };
};
export const uploadUserPhotoProfile = (img) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "POST",
          url: `${baseUrl}/users/api/upload`,
          data: {
            img,
          },
        });
        resolve(response.data.url);
      } catch (error) {
        reject(error);
      }
    });
  };
};

// update user nickname and profile picture
export const updatingUserData = ({
  id,
  nickname,
  photoProfile,
  access_token,
}) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "PATCH",
          url: `${baseUrl}/users/${id}`,
          data: {
            nickname,
            photoProfile,
          },
          headers: {
            access_token,
          },
        });
        // console.log(response.data.data);

        await dispatch(userLoggedInSuccess(response.data.data));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
};

// getting User Data By Id
export const userDataFetchedSuccess = (payload) => {
  return {
    type: "userData/userDataFetched",
    payload,
  };
};
export const fetchDataUser = (id) => {
  return (dispatch) => {
    fetch(`${baseUrl}/users/${id}`)
    .then((res) =>{
      if (!res.ok) {
        throw new Error("internal server error");
      }
      return res.json();
    })
    .then((data) =>{
      console.log(data.data, "<<<< fetch data user");
      dispatch(userDataFetchedSuccess(data.data));
    })
    .catch((error) => {
      console.log(error);
    });
    // return new Promise(async (resolve, reject) => {
    //   try {
    //     console.log(id);
    //     const response = await axios({
    //       method: "GET",
    //       url: `${baseUrl}/users/${id}`,
    //     });
    //     console.log(response.data, "<<<< fetch data user");
    //     dispatch(userDataFetchedSuccess(response.data.data));
    //     // resolve(response.data.data);
    //     resolve()
    //   } catch (error) {
    //     console.log(error);
    //     reject(error);
    //   }
    // });
  };
};

//get all couples
export const fetchAllCouples = () => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "GET",
          url: `${baseUrl}/couple`,
        });
        resolve(response.data.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}
// getting User Data By Id
// export const partnerDataFetchedSuccess = (payload) => {
//   return {
//     type: "partner/partnerAdded",
//     payload,
//   };
// };
// export const fetchDataPartner = (id) => {
//   return (dispatch) => {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const response = await axios({
//           method: "GET",
//           url: `${baseUrl}/users/${id}`,
//         });
//         //   console.log(response.data.data)
//         await dispatch(partnerDataFetchedSuccess(response.data.data));
//         resolve(response.data.data);
//       } catch (error) {
//         console.log(error);
//         reject(error);
//       }
//     });
//   };
// };

//update partnerCode
export const updatePartnerCode = (id, partnerCode, access_token) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          method: "PATCH",
          url: `${baseUrl}/users/input/${id}`,
          data: {
            partnerCode,
          },
          headers: {
            access_token,
          },
        });
        // console.log(response.data.data)
        resolve(response.data.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
};

// get 3 Random Topics
export const getAllTopics = (access_token) => {
  return (dispatch) => {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(access_token);
        const response = await axios({
          method: "GET",
          url: `${baseUrl}/topics`,
          headers: {
            access_token,
          },
        });
        console.log(response.data, "get all topics");
        resolve(response.data);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  };
};
// get couple by id
export const partnerDataFetchedSuccess = (payload) => {
  return {
    type: "partner/partnerAdded",
    payload,
  };
};
export const getCoupleByIdToGetPartnerData = (UserId, CoupleId) => {
  return (dispatch) => {
    fetch(`${baseUrl}/couples/${CoupleId}/${UserId}`)
      .then((res) =>{
        if (!res.ok) {
          throw new Error("internal server error");
        }
        return res.json();
      })
      .then((data) =>{
        // console.log(data.Users[0], "<<<< dari get couple id")
        dispatch(partnerDataFetchedSuccess(data.Users[0]))
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
