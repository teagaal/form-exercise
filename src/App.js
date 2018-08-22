import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form/Form';

class App extends Component {
  render() {
    return (
      <main>
        <section className="form-container">
          <Form />
        </section>
      </main>
    );
  }
}

export default App;
