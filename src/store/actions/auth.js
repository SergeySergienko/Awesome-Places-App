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
          dispatch(authSetToken(parsRes.idToken));
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

export const authSetToken = token => {
  return {
    type: AUTH_SET_TOKEN,
    token
  };
};
