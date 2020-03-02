import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = props => {
  return (
    <div className="propertyCard">
      <span id="title">{props.title}</span>
      <div id="picture">
        <img id="house" src="https://cdn1.iconfinder.com/data/icons/navigation-7/32/house-01-512.png" width="60" height="60" alt="house" />
      </div>
      <span>{props.type}</span>
      <br />
      <span>£{props.price}</span>
      <br />
      <span>Location:{props.city}</span>
      <br />
      <span>Bedrooms: {props.bedrooms}</span>
      <br />
      <span>Bathrooms: {props.bathrooms}</span>
      <br />
      <span>Contact: {props.email}</span>
    </div>
  );
};

export default PropertyCard;
