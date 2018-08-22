import React, { Component } from 'react';

class CountryField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    const JSON = await response.json()
    const country = JSON.map(country => `${country.name}`)
    this.setState({ countries: country })
  }

  render() {
    const countriesArr = this.state.countries;
    const options = countriesArr.map((country, i) => <option key={i}>{country}</option>);
    return (
      <select onChange={this.props.onChange}>
        <option value='' defaultValue>Countries</option>
        {options}
      </select>
    )
  }
}

export default CountryField;
