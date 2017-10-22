import { getProperties, clearDataAndGetNewResults } from '../../actions/properties';
import { getReviews, clearReviews } from '../../actions/reviews';
import { connect } from 'react-redux';
import PropertiesFeed from './PropertiesFeed';

const mapDispatchToProps = (dispatch) => {
  return {
    getProperties: (city) => dispatch(getProperties(city)),
    clearDataAndGetNewResults: (city) => dispatch(clearDataAndGetNewResults(city)),
    getReviews: (propertyId) => dispatch(getReviews(propertyId)),
    clearReviews: () => dispatch(clearReviews()),
  };
};

const mapStateToProps = state => {
  return {
    properties: state.properties.listings,
    totalListings: state.properties.totalListings,
    isFetchingProperties: state.properties.isFetching,
    isFetchingReviews: state.reviews.isFetching,
    fetchError: state.properties.fetchError,
    reviews: state.reviews.reviews
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesFeed);
