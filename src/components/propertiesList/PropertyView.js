import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './propertiesList.scss';

const loadersArr = ['#e1f7d5', '#ffbdbd', '#c9c9ff', '#f1cbff', '#f6dbdb', '#f2e3c6', '#d3ece1', '#c2eec7', '#eed2e8', '#da635d', '#dcd0c0', '#b1938b', '#06b8d2', '#98f2e1']
const getLoaderImage = () => loadersArr[Math.floor(Math.random() * loadersArr.length)];

class PropertyView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: getLoaderImage()
    }
  }

  render() {
    const {backgroundColor} = this.state;
    const {property, handleSelectProperty, style} = this.props;
    return(
      <div  className="propertyContainer" style={style}>
        <div className="propertyInnerContainer" style={{backgroundColor}}  onClick={() => handleSelectProperty(property)}>
          <img src={property.picture} className="propertyImage"/>
          <div>
            <div className="upperDetails">
              <h4 className="title" title={property.title}>{property.title}</h4>
              <h4 className="price">{property.price}$</h4>
            </div>
            <p className="address" title={property.address}>{property.address}</p>
          </div>
        </div>
      </div>
    )
  }

}




PropertyView.propTypes = {
  property: PropTypes.object,
  handleSelectProperty: PropTypes.func,
  style: PropTypes.object,
};

export default PropertyView;
