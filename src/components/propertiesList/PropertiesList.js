import React from 'react';
import PropTypes from 'prop-types';
import './propertiesList.scss';
import PropertyView from "./PropertyView";



const PropertiesList = ({ properties, handleSelectProperty }) => (

    <div id="propertiesListContainer">
        {properties.map((property) => (
          <PropertyView key={property.id} property={property} handleSelectProperty={handleSelectProperty}/>
        ))}
    </div>
);

PropertiesList.propTypes = {
  properties: PropTypes.array.isRequired,
  handleSelectProperty: PropTypes.func.isRequired,
};

export default PropertiesList;
