import React, { Component } from 'react';
import Field from '../Field/Field';
import CountryField from '../CountryField/CountryField';
import Greeting from '../Greeting/Greeting';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        name: '',
        surname: '',
        birthday: ''
      },
      country: '',
      showGreeting: false,
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(this.state));
    this.setState({
      showGreeting: true,
    });
  }

  onInputChange = ({ name, value }) => {
    const fields = this.state.fields;
    fields[name] = value;
    this.setState({ fields })
  }

  handleOnChange = (e) => {
    this.setState({
      country: e.target.value
    })
  }

  render() {

    return (
      <section className="form">
        <h1>Intive - FDV Exercise</h1>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Name:</label>
            <Field
              type='text'
              name='name'
              value={this.state.fields.name}
              onChange={this.onInputChange}
            />
          </div>

          <div className="field">
            <label>Surname:</label>
            <Field
              type='text'
              name='surname'
              value={this.state.fields.surname}
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>Country:</label>
            <CountryField
              name='country'
              onChange={this.handleOnChange}
            />
          </div>
          <div className="field">

            <label>Birthday:</label>
            <Field
              type='date'
              name='birthday'
              value={this.state.fields.birthday}
              onChange={this.onInputChange}
            />
          </div>

          <input type='submit' value='Save' className='save-button' />
        </form>
        {
          this.state.showGreeting
            ? <Greeting
              name={this.state.fields.name}
              country={this.state.country}
              birthday={this.state.fields.birthday}
            />
            : null
        }
        <p className="name">Serena Maurenza</p>
      </section>
    )
  }
}

export default Form;
