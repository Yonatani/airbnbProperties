import React, { Component } from "react";
import Dialog from 'material-ui/Dialog';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './propertiesFeed.scss';
import PropertyView from "../propertiesList/PropertyView";
import PropertiesList from '../propertiesList/PropertiesList';
import ReviewsList from "../reviewsList/ReviewsList";
const loader = require('../../images/jelly-fluid-loader.gif');
const close = require('../../images/icon-close.png');

const cities = [
  { value: 'Tel Aviv', label: 'Tel Aviv' },
  { value: 'London', label: 'London' },
  { value: 'Paris', label: 'Paris' },
  { value: 'New York', label: 'New York' },
];

class PropertiesFeed extends Component {

  static defaultProps = {
    reviews: [],
    properties: []
  };

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this._handleSelectProperty = this._handleSelectProperty.bind(this);
    this._renderReviews = this._renderReviews.bind(this);
    this.state = {
      currentCity: cities[0],
      selectedProperty: null,
      showModal: false
    };
  }

  componentWillMount() {
    this.props.getProperties(cities[0].value);
  }

  loadMore() {
    this.props.getProperties();
  }

  _handleSelectProperty(property) {
    if(!this.state.showModal){
      this.props.getReviews(property.id);
      this.setState({selectedProperty: property, showModal: true})
    }

  }

  handleClose = () => {
    this.props.clearReviews()
    this.setState({showModal: false});
  };

  changeCity(city) {
    const {clearDataAndGetNewResults, getProperties} = this.props;
    if(city.value !== this.state.currentCity) {
      clearDataAndGetNewResults();
      getProperties(city.value);
      this.setState({currentCity: city.value})
    }
  }

  _renderReviews() {
    const {reviews, isFetchingReviews} = this.props
    if(isFetchingReviews){
      return <div>Loading Reviews...</div>
    }
    if(reviews.length > 0) {
      return (
        <ReviewsList reviews={reviews}/>
      )
    } else {
      return (
        <div>Sorry, There are no reviews for this property</div>
      )
    }

  }

  render() {
    const {properties, totalListings, isFetchingProperties, fetchError} = this.props;
    const {selectedProperty} = this.state
    return (
      <div id="container">
        <div id="selectBoxContainer">
          <Select
            name="form-field-name"
            value={this.state.currentCity}
            options={cities}
            onChange={this.changeCity}
            clearable={false}
          />
        </div>
        <div id="loaderContainer">
          {isFetchingProperties ? <img src={loader} id="loader" /> : null}
          {fetchError ? <div id="error">Sorry, wer'e having issues with airbnb's server, please try again later</div> : null}
        </div>
        <PropertiesList properties={properties} handleSelectProperty={this._handleSelectProperty}/>
        <Dialog
          modal={true}
          open={this.state.showModal}
          autoScrollBodyContent={true}>
          <div id="modalContentContainer">
            <img src={close} id="closeBtn" onClick={this.handleClose}/>
            <PropertyView property={selectedProperty} style={{width: "100%"}} handleSelectProperty={this._handleSelectProperty}/>
            {this._renderReviews()}
          </div>
        </Dialog>
        {properties.length < totalListings ? <button id="showMoreBtn" onClick={this.loadMore}>Show More</button> : null}
      </div>
    );
  }
}

PropertiesFeed.propTypes = {
  properties: PropTypes.array.isRequired,
  reviews: PropTypes.array,
  totalListings: PropTypes.number.isRequired,
  isFetchingProperties: PropTypes.bool.isRequired,
  isFetchingReviews: PropTypes.bool.isRequired,
  fetchError: PropTypes.bool,
  getProperties: PropTypes.func.isRequired,
  getReviews: PropTypes.func.isRequired,
  clearDataAndGetNewResults: PropTypes.func.isRequired
};

export default PropertiesFeed;
