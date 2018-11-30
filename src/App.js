import React, { Component } from 'react';
import './App.css';
import restaurants from './restaurants';
import "./styles.css";


//COMPONENTS BELOW//
import Restaurant from './Restaurant';


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: restaurants,
      neighbourhood: "",
    }
  }


  updateLikes = event => {
    
    const newLikes = this.state.restaurants.filter(rest => rest.neighbourhood === this.state.neighbourhood)

    newLikes[event.target.value].likes = newLikes[event.target.value].likes + 1;
    this.setState({
      likes: newLikes
    })

  }

handleChange = event => {
  
  this.setState({
    neighbourhood: event.target.value
  })
}

render() {
  return (
    <div className="App">
      
        <h1>Find Kid Friendly Spots Near You</h1>

        <label htmlFor="neighbourhoods">Choose your neighbourhood:</label>
        <select onChange={this.handleChange} name="neighbourhoods" id="neighbourhoods">
          <option>(select)</option>
          <option  id='West End' value='West End'>West End</option>
          <option id='East End' value='East End'>East End</option>
          <option id='Downtown' value='Downtown'>Downtown</option>
        </select>
    <section>
      {this.state.restaurants.filter(rest => rest.neighbourhood === this.state.neighbourhood).map((restaurant, i) => {
        return (
        <Restaurant 
        id={i}
        updateLikes={this.updateLikes}
        name={restaurant.name}
        likes={restaurant.likes}
        address={restaurant.address}
        kfRating={restaurant.kfRating}
        highchairs={restaurant.highchairs}
        strollerAcc={restaurant.strollerAcc}
        /> 
        );
  })}
      </section>
    </div>
  );
}

}

export default App;

