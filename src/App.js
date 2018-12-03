import React, { Component } from 'react';
import './App.css';
import restaurants from './restaurants';
import "./styles.css";
import firebase from './firebase';
import Header from './Header';
import Main from './Main';
import Restaurant from './Restaurant';
import Footer from './Footer';


//FIREBASE DATABASE
const dbRef = firebase.database().ref();

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: restaurants,
      neighbourhood: "",
    }
  }

  // componentDidMount() {
    
  //   dbRef.on('value', (snapshot) => {

  //     const newArray = snapshot.val();

  //     this.setState({
  //       restaurants: newArray
  //     })
  //   })
  // }


  updateLikes = event => {

    const filteredRest = this.state.restaurants.filter(rest => rest.neighbourhood === this.state.neighbourhood);

    const newLikes = filteredRest[event.target.value].likes = filteredRest[event.target.value].likes + 1;


    dbRef.set(restaurants);

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
    const location = {
      lat: 40.75,
      lng: -73.98
    }
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>

        <section className='searchMenu'>
          <h3>Find Kid Friendly Spots Near You</h3>

          <label htmlFor='neighbourhoods'>Choose your neighbourhood:   </label>
          <select onChange={this.handleChange} name="neighbourhoods" id="neighbourhoods">
            <option>(select)</option>
            <option id='West End' value='West End'>West End</option>
            <option id='East End' value='East End'>East End</option>
            <option id='Downtown' value='Downtown'>Downtown</option>
          </select>
          <section>
            {this.state.restaurants.filter(rest => rest.neighbourhood === this.state.neighbourhood).map((restaurant, i) => {
              return (
                <Restaurant
                  key={i}
                  id={i}
                  updateLikes={this.updateLikes}
                  img={restaurant.img}
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
        </section>
        <Footer />
      </div>
    );
  }

}

export default App;

