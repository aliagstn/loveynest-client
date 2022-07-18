import axios from "axios";
const baseUrl = "http://80b3-103-105-104-34.ngrok.io"

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
        payload
    }
}
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
          await dispatch(userLoggedInSuccess(response.data.data))
          resolve(response.data.data.id);
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
        payload
    }
}
export const uploadUserPhotoProfile = (img) => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios({
                    method: "POST",
                    url: `${baseUrl}/users/api/upload`,
                    data: {
                        img
                    }
                })
                resolve(response.data.url)
            } catch (error) {
                reject(error)
            }
        })
    }
}

// update user nickname and profile picture
export const updatingUserData = ({id, nickname, photoProfile}) => {
    return (dispatch) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios({
                    method: "POST",
                    url: `${baseUrl}/users/${id}`,
                    data: {
                        nickname,
                        photoProfile
                    }
                })
                console.log(response.data.data)
                await dispatch(userLoggedInSuccess(response.data.data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })
    }
}