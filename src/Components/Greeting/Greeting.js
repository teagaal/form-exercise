import React, { Component } from 'react';

class Greeting extends Component {

  render() {
    const birthdate = this.props.birthday
    const getAge = (birthdate) => {
      const today = new Date();
      const birthday = new Date(birthdate);
      let age = today.getFullYear() - birthday.getFullYear();
      const month = today.getMonth() - birthday.getMonth();
      if (month === 0 && today.getDate() < birthday.getDate()) {
        age--;
      }
      return age
    }
    const actualAge = getAge(birthdate);

    const splitDate = birthdate.split('-');
    const day = splitDate[2];

    const locale = 'en-us';
    const objDate = new Date(birthdate);
    const month = objDate.toLocaleString(locale, { month: 'long' });

    return (
      <section className='greeting'>
        <p>
          Hello {this.props.name} from {this.props.country}. On the {day} of {month} you will be {actualAge} years old.
        </p>
      </section>
    )
  }
}

export default Greeting;