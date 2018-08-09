import { TRY_AUTH } from "./actionTypes";
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
      .catch(err => {
        console.log(err);
        alert("Authentication failed, please try again!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsRes => {
        dispatch(uiStopLoading());
        if (parsRes.error) {
          alert("Authentication failed, try again!");
        } else {
          NavigationService.navigate("Tabs");
        }
        // console.log(parsRes);
      });
  };
};
