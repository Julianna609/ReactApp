import React, { Component } from 'react';
import moment from 'moment';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      date: moment()
    };
  }
// date button functions
  hangleAddDay = () => {
    this.setState( { date: this.state.date.add(1, 'day')} )
  };
  hangleSubtactDay = () => {
    this.setState( { date: this.state.date.subtract(1, 'day')} )
  }
  
  render() {

  const {date} = this.state;

  return(
    <section>
      <header>
        <h1>My Budget</h1>
        <div className='dateLine'>
          <div className='dateButton' onClick={this.hangleAddDay}>+</div>
          <p>{date.format('DD.MM.YYYY')}</p>
          <div className='dateButton' onClick={this.hangleSubtactDay}>-</div>
        </div>
      </header>
    </section>
  )
  }
}

export default App;
