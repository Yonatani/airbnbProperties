import { ADD_PROPERTIES, ADD_PROPERTIES_TO_QUEQUE, CLEAR_PROPERTIES_DATA, START_FETCHING_PROPERTIES, FINISH_FETCHING_PROPERTIES, ERROR_WHILE_FETCHING} from '../actions/properties';

const initialState = {
  listings: [],
  queueListings: [],
  totalListings: 0,
  isFetching: false,
  fetchError: false,
};

const properties = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROPERTIES: {
      const {listings} = action;
      const totalListings = action.totalListings ? action.totalListings : state.totalListings;
      return {...state, listings, totalListings};
    }
    case ADD_PROPERTIES_TO_QUEQUE: {
      const {queueListings} = action;
      return {...state, queueListings}
    }
    case START_FETCHING_PROPERTIES: {
      return {...state, isFetching: true}
    }
    case FINISH_FETCHING_PROPERTIES: {
      return {...state, isFetching: false}
    }
    case ERROR_WHILE_FETCHING: {
      return {...state, fetchError: true}
    }
    case CLEAR_PROPERTIES_DATA: {
      return initialState
    }
    default:
      return state;
  }
};

export default properties;
