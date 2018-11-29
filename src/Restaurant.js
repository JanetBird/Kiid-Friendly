import React from 'react';

const RestaurantList = (props) => {
    console.log(props);
    return (
        <div>
               {/* if empty string return true
                if neightbourhood is not empty string run test on r */}
            {props.restaurants.filter(r => r.neighbourhood === props.neighbourhood).map((restaurant, i) => {
                    return (
                    <div key={i}>
                        <h2>{restaurant.name}</h2>
                        <h3>{restaurant.address}</h3>
                        <p>KF Rating: {restaurant.kfRating}</p>
                        <p>No. of Highchairs: {restaurant.highchairs}</p>
                        <p>Stroller Parking: {restaurant.strollerParking}</p>
                        <p>{restaurant.description}</p>
                        <button>Like</button>
                    </div>    
                );
            })}
        </div>
     )
}

export default RestaurantList;

