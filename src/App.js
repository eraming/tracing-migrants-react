import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    regionTotals: [],
    migrants2019: [],
    value: '',
  }


onSelectChange = (ev) => {
  this.setState({value: ev.target.value});
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
        
        {/*  loop inside here, to find region + total, matched to month?  */}

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

      <select
      value={this.state.value}
      onChange={this.onSelectChange}
      id="months"
      >
        <option value> -- reported month -- </option>
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

{/*DEFAULT BARS GENERATION BELOW */}

       {/*{
          this.state.regionTotals.map(data => (
            <div class="BarChart-bar" style={{width: data.total }}>
            {data.region}
            <span class="total"> {data.total} </span>
            </div>
          ))
      }*/}


{/*BARS BY MONTH*/}

      {
         this.state.migrants2019.map(data => (
           <div className="BarChart-bar">
           {data['Region of Incident']}
           <span className="total"> {data.total} </span>
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
