import React, { Component } from 'react';

import '../styles/AddProperty.css';
import axios from 'axios';

class AddProperty extends Component {
state = {
  fields: {
    title: '',
    type: 'Flat',
    city: '',
    bathrooms: '',
    bedrooms: '',
    email: '',
    price: '',
  },
};

  handleAddProperty = event => {
    event.preventDefault();
    console.log(this.state.fields);
    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.fields.title,
      type: this.state.fields.type,
      city: this.state.fields.city,
      bathrooms: this.state.fields.bathrooms,
      bedrooms: this.state.fields.bedrooms,
      email: this.state.fields.email,
      price: this.state.fields.price,
    });
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder={'Title'} />
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terrace">Terrace</option>
            <option value="End of terrace">End of Terrace</option>
            <option value="Bungalow">Bungalow</option>
          </select>
          <select name="city" value={this.state.fields.city} placeholder={'City'} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <input name="bathrooms" value={this.state.fields.bathrooms} placeholder={'Bathrooms'} onChange={this.handleFieldChange} />
          <input name="bedrooms" value={this.state.fields.bedrooms} placeholder={'Bedrooms'} onChange={this.handleFieldChange} />
          <input name="email" value={this.state.fields.email} placeholder={'Email'} onChange={this.handleFieldChange} />
          <input name="price" value={this.state.fields.price} placeholder={'Price'} onChange={this.handleFieldChange} />
          <button type="submit">
            Add Property
          </button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
