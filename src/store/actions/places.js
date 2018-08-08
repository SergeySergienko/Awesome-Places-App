import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "./actionTypes";
import { uiStartLoading, uiStopLoading } from "./index";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    dispatch(uiStartLoading());
    fetch(
      "https://us-central1-awesome-places-project-348ef.cloudfunctions.net/storeImage",
      {
        method: "POST",
        body: JSON.stringify({ image: image.base64 })
      }
    )
      .catch(error => {
        console.log(error);
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
          "https://awesome-places-project-348ef.firebaseio.com/places.json",
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
        dispatch(uiStopLoading());
      });
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
