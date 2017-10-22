import {ADD_REVIEWS, CLEAR_REVIEWS, START_FETCHING_REVIEWS, FINISH_FETCHING_REVIEWS} from '../actions/reviews';

const initialState = {
  reviews: [],
  isFetching: false
};

const properties = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEWS: {
      const {reviews} = action;
      return {...state, reviews}

    }
    case CLEAR_REVIEWS: {
      return {...state, reviews: []}

    }
    case START_FETCHING_REVIEWS: {
      return {...state, isFetching: true}
    }
    case FINISH_FETCHING_REVIEWS: {
      return {...state, isFetching: false}
    }
    default:
      return state;
  }
};

export default properties;
