import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
console.log('test render function');

class App extends Component {
  state = {
    regionTotals: '',


  }


componentDidMount() {
  fetch("./region-total.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
    .then(response => response.json())
    .then(data => {
      console.log("got region totals", data);

      this.setState({
        regionTotals: data,

      });
    });
}





render() {
  return (

    <div className="App">
      <header className="App-header">
      <h1 className="h1">
      2019 Recorded Migrant Deaths </h1>
      <p> Data from <a href="https://missingmigrants.iom.int/">Missing Migrants Project</a>.</p>
      <hr /> <p> Select from the drop down list to see records by month. If there are no records for the month,
      data will not be displayed for that region. </p>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
  >

        </a>
      </header>
    </div>

    // return closing tag
    );
  // render closing tag
  }
// class app compotent closing tag
}

export default App;
