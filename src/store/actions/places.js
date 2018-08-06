import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "./actionTypes";

export const addPlace = (placeName, location, image) => {
  return dispatsh => {
    const placeData = {
      name: placeName,
      location
    };
    fetch("https://awesome-places-project-348ef.firebaseio.com/places.json", {
      method: "POST",
      body: JSON.stringify(placeData)
    })
      .then(res => res.json())
      .then(parsRes => {
        console.log(parsRes);
      })
      .catch(error => console.log(error));
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
