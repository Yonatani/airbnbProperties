import _ from 'lodash';
import propertiesService from '../services/propertiesService';
export const ADD_PROPERTIES = 'ADD_PROPERTIES';
export const ADD_PROPERTIES_TO_QUEQUE = 'ADD_PROPERTIES_TO_QUEQUE';
export const CLEAR_PROPERTIES_DATA = 'CLEAR_PROPERTIES_DATA';
export const START_FETCHING_PROPERTIES = 'START_FETCHING_PROPERTIES';
export const FINISH_FETCHING_PROPERTIES = 'FINISH_FETCHING_PROPERTIES';
export const ERROR_WHILE_FETCHING = 'ERROR_WHILE_FETCHING';
export function getProperties(city) {
    return (dispatch, getState) => {
      if(getState().properties.listings.length === 0){
        dispatch(startFetchingForData())
          propertiesService.getPropertiesByCity(city).then((data) => {
            dispatch(addProperties(data.listings, data.totalListings));
            dispatch(getPropertiesToQueue(city));
            dispatch(finishFetchingForData())
          }).catch(() => {
            dispatch(finishFetchingForData())
            dispatch(errorHandler());
          });
      } else {
        const unitedProperties = [...getState().properties.listings, ...getState().properties.queueListings]
        dispatch(addProperties(unitedProperties));
        dispatch(getPropertiesToQueue(city));
      }
    };

}

function getPropertiesToQueue(city) {
  return (dispatch) => {
    propertiesService.getPropertiesByCity(city).then((data) => {
      dispatch(addPropertiesToQueue(data.listings));
    });

  };
}

export function clearDataAndGetNewResults(city) {
    return (dispatch) => {
      dispatch(clearPropertiesData());
    };
}

export function addProperties(listings, totalListings) {
  return {
    type: ADD_PROPERTIES,
    listings,
    totalListings
  };
}

export function startFetchingForData() {
  return {
    type: START_FETCHING_PROPERTIES,
  };
}
export function finishFetchingForData() {
  return {
    type: FINISH_FETCHING_PROPERTIES,
  };
}

export function addPropertiesToQueue(queueListings) {
  return {
    type: ADD_PROPERTIES_TO_QUEQUE,
    queueListings,
  };
}

export function clearPropertiesData() {
  return {
    type: CLEAR_PROPERTIES_DATA,
  };
}

function errorHandler() {
  return {
    type: ERROR_WHILE_FETCHING,
  };
}


