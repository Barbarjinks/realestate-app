import React from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import { Link } from 'react-router-dom';
import '../styles/Properties.css';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data }) => this.setState({ properties: data }));
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${this.props.location.search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className="properties">
        <div id="sidebar">
          <h2> Filter By:</h2>
          <Link to={'/?query={"city": "Manchester"}'}>Manchester</Link>
          <br />
          <Link to={'/?query={"city": "Leeds"}'}>Leeds</Link>
          <br />
          <Link to={'/?query={"city": "Sheffield"}'}>Sheffield</Link>
          <br />
          <Link to={'/?query={"city": "Liverpool"}'}>Liverpool</Link>
        </div>
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <PropertyCard
              key={property._id}
              price={property.price}
              title={property.title}
              bathrooms={property.bathrooms}
              bedrooms={property.bedrooms}
              type={property.type}
              email={property.email}
              city={property.city}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Properties;
