import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';

import AgeStats from './AgeStats';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: '',
      birthday: '1985-08-05',
      showStats: false //->ternary expression
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true }); //important to set default state
  }

  render() {
    return (
      <div className='App'>
        <Form>
          <h1>Age Calculator</h1>
          <b>Enter your date of birth</b>
          <FormControl
            className='control'
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {''}
          <Button className='button' onClick={() => this.changeBirthday()}>
            Calculate Age
          </Button>
          {this.state.showStats ? (
            <div >
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div />
          )}
        </Form>
      </div>
    );
  }
}

export default App;
