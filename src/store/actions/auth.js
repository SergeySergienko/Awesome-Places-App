import { AsyncStorage } from "react-native";

import { TRY_AUTH, AUTH_SET_TOKEN } from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";
import NavigationService from "../../../NavigationService";

export const tryAuth = (authData, authMode) => {
  return dispatch => {
    dispatch(uiStartLoading());

    const apiKey = "AIzaSyB7RuOwtq4_3vTY8lsUR7JUzheZtbcfuI0";
    const endpoint = authMode === "signup" ? "signupNewUser" : "verifyPassword";
    const url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/${endpoint}?key=${apiKey}`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(parsRes => {
        dispatch(uiStopLoading());
        if (!parsRes.idToken) {
          alert("Authentication failed, try again!");
        } else {
          dispatch(authStoreToken(parsRes.idToken, parsRes.expiresIn));
          NavigationService.navigate("Tabs");
        }
        console.log(parsRes);
      })
      .catch(err => {
        console.log("Ошибка: ", err);
        alert("В catch ловим ошибку!");
        dispatch(uiStopLoading());
      });
  };
};

export const authStoreToken = (token, expiresIn) => {
  return dispatch => {
    dispatch(authSetToken(token));
    const now = new Date();
    const expiryDate = now.getTime() + expiresIn * 1000;
    AsyncStorage.setItem("ap:auth:token", token);
    AsyncStorage.setItem("ap:auth:expiryDate", expiryDate.toString());
  };
};

export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    token
  };
};

export const authGetToken = () => {
  return (dispatch, getState) => {
    const promise = new Promise((resolve, reject) => {
      const token = getState().auth.token;
      if (!token) {
        let fetchedToken;
        AsyncStorage.getItem("ap:auth:token")
          .catch(err => reject())
          .then(tokenFromStorage => {
            fetchedToken = tokenFromStorage;
            if (!tokenFromStorage) {
              reject();
              return;
            }
            return AsyncStorage.getItem("ap:auth:expiryDate");
          })
          .then(expiryDate => {
            const parsedExpiryDate = new Date(parseInt(expiryDate));
            const now = new Date();

            if (parsedExpiryDate > now) {
              dispatch(authSetToken(fetchedToken));
              resolve(fetchedToken);
            } else {
              reject();
            }
          })
          .catch(err => reject());
      } else {
        resolve(token);
      }
    });
    return promise;
  };
};

export const authAutoSignin = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        NavigationService.navigate("Tabs");
      })
      .catch(err => console.log("Failed to fetch token!"));
  };
};
