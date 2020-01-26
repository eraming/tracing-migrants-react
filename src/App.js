import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// console.log('test render function');

class App extends Component {
  state = {
    regionTotals: [],
    migrants2019: [],
  }


  componentDidMount() {
    fetch("./region-total.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
      .then(response => response.json())
      .then(data => {

        console.log("year total by region:", data);
        this.setState({
          regionTotals: data,

        });

        this.onlyRegionTotals();

      });
  }

  onlyRegionTotals () {
    fetch("./migrants2019.json", { mode: 'cors', method: 'get', headers: { 'Access-Control-Allow-Origin': '*' }})
      .then(response => response.json())
      .then(fulldata => {
        console.log("full json", fulldata);
        this.setState({
          migrants2019: fulldata,
        });
      });
  }



  render() {

    return (
      <div className="App">
      <header className="App-header"> </header>
      <div className="GridContainer">

      <h1 className="Header">2019 Recorded Migrant Deaths </h1>
      <p className="Header"> Data from <a href="https://missingmigrants.iom.int/">Missing Migrants Project</a>.</p>
      <hr className="BottomLine" />
      <p className="Header"> Select from the drop down list to see records by month. If there are no records for the month,
      data will not be displayed for that region. </p>

      <select id="months" onChange="render()">
        <option selected value> -- reported month -- </option>
        <option value="Jan">January</option>
        <option value="Feb">February</option>
        <option value="Mar">March</option>
        <option value="Apr">April</option>
        <option value="May">May</option>
        <option value="Jun">June</option>
        <option value="Jul">July</option>
        <option value="Aug">August</option>
        <option value="Sep">September</option>
        <option value="Oct">October</option>
        <option value="Nov">November</option>
        <option value="Dec">December</option>
      </select>

      <div id="BarChart" className="BarChart">

      {

          this.state.regionTotals.map(data => (
            <div class="BarChart-bar">
            {data.region}
            <span class="total"> {data.total} </span>
            </div>
          ))


      }
      </div>

          <div className="BarChart-max">max</div>
      <hr className="BottomLine" />



      </div>
</div>

    // return closing tag
    );
  // render closing tag
};
// class app compotent closing tag
};

export default App;
