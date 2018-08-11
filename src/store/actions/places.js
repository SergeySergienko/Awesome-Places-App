import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
  SET_PLACES
} from "./actionTypes";
import { uiStartLoading, uiStopLoading, authGetToken } from "./index";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    let authToken;
    dispatch(uiStartLoading());
    dispatch(authGetToken())
      .catch(() => {
        alert("No valid token found!");
      })
      .then(token => {
        authToken = token;
        return fetch(
          "https://us-central1-awesome-places-project-348ef.cloudfunctions.net/storeImage",
          {
            method: "POST",
            body: JSON.stringify({ image: image.base64 }),
            headers: {
              Authorization: "Bearer " + authToken
            }
          }
        );
      })

      .catch(error => {
        console.log(error);
        alert("Something went wrong, try again!");
        dispatch(uiStopLoading());
      })
      .then(res => res.json())
      .then(parsRes => {
        const placeData = {
          name: placeName,
          location,
          image: parsRes.imageUrl
        };
        return fetch(
          "https://awesome-places-project-348ef.firebaseio.com/places.json?auth=" +
            authToken,
          {
            method: "POST",
            body: JSON.stringify(placeData)
          }
        );
      })
      .then(res => res.json())
      .then(parsRes => {
        console.log(parsRes);
        dispatch(uiStopLoading());
      })
      .catch(error => {
        console.log(error);
        alert("Something went wrong, try again!");
        dispatch(uiStopLoading());
      });
  };
};

export const getPlaces = () => {
  return dispatch => {
    dispatch(authGetToken())
      .then(token => {
        return fetch(
          "https://awesome-places-project-348ef.firebaseio.com/places.json?auth=" +
            token
        );
      })
      .catch(() => {
        alert("No valid token found!");
      })
      .then(res => res.json())
      .then(parsRes => {
        const places = [];
        for (let key in parsRes) {
          places.push({
            ...parsRes[key],
            image: {
              uri: parsRes[key].image
            },
            key
          });
        }
        dispatch(setPlaces(places));
      })
      .catch(error => {
        console.log(error);
        alert("Something went wrong, sorry :/");
      });
  };
};

export const setPlaces = places => {
  return {
    type: SET_PLACES,
    places
  };
};

export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};

export const selectPlace = key => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  };
};

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE
  };
};
