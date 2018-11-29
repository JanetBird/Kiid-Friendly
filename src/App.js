import React, { Component } from 'react';
import './App.css';
import restaurants from './restaurants';
import RestaurantList from './Restaurant';

//COMPONENTS BELOW//
// import RestaurantList from './Restaurant';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      neighbourhood: ""
    }
  }

  componentDidMount() {
    this.setState({restaurants})
  }

handleChange = e => {
  // console.log(e.target.value);
  this.setState({
    neighbourhood: e.target.value
  })
  //filter this.state.restaurants for only the objects that match neighbourhood key match e.target.value
}; 

render() {
  return (
    <div className="App">
      <h1>Find Kid Friendly Spots Near You</h1>
      <label htmlFor="neighbourhoods">Choose your neighbourhood:</label>
      <select onChange={this.handleChange} name="neighbourhoods" id="neighbourhoods">
        <option  id='neighbourhood' value='West End'>West End</option>
  
        <option id='neighbourhood' value='East End'>East End</option>

        <option id='neighbourhood' value='Downtown'>Downtown</option>
      </select>
      <section>
        <RestaurantList restaurants={this.state.restaurants} neighbourhood={this.state.neighbourhood}/>
      </section>
    </div>
  );
}

}

export default App;
