import _ from 'lodash';
import propertiesService from '../services/propertiesService';
export const ADD_REVIEWS = 'ADD_REVIEWS';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';
export const START_FETCHING_REVIEWS = 'START_FETCHING_REVIEWS';
export const FINISH_FETCHING_REVIEWS = 'FINISH_FETCHING_REVIEWS';

export function getReviews(propertyId) {
  return (dispatch) => {
    dispatch(startFetchingForData())
    propertiesService.getReviews(propertyId).then((reviews) => {
      dispatch(addReviews(reviews));
      dispatch(finishFetchingForData())
    });

  };
}

export function addReviews(reviews) {
  return {
    type: ADD_REVIEWS,
    reviews,
  };
}

export function clearReviews() {
  return {
    type: CLEAR_REVIEWS,
  };
}


export function startFetchingForData() {
  return {
    type: START_FETCHING_REVIEWS,
  };
}
export function finishFetchingForData() {
  return {
    type: FINISH_FETCHING_REVIEWS,
  };
}




