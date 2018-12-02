import React from 'react';

const Restaurant = (props) => {
        return (
            <div>
                <section className="restaurantCard wrapper">
                    <div className="restaurantCard__img">
                        <img src={props.img} alt="Interior of restaurant"/>
                    </div>
                    <div>
                        <h4>{props.name}</h4>
                        <h5>{props.address}</h5>
                        <p><span>KF Rating:  </span>{props.kfRating}</p>
                        <p><span>No. of Highchairs: </span>{props.highchairs}</p>
                        <p><span>Stroller Accessibility: </span>{props.strollerAcc}</p>
                        <p>{props.description}</p>
                    </div>
                    <div className="restaurantCard__likes">
                        <button onClick={props.updateLikes} value={props.id}>Like</button>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" x="0px" y="0px"><title>Artboard 29</title><g><path d="M81.1,23.69h0a19.17,19.17,0,0,0-27.12,0l-4,4-4-4a19.17,19.17,0,0,0-27.12,0h0a19.17,19.17,0,0,0,0,27.12l4,4,0,0L50,81.93l0,0,0,0L77.13,54.81l0,0,4-4A19.17,19.17,0,0,0,81.1,23.69Z" /></g></svg>
                        </div>  
                        <div>
                            <p>{props.likes}</p>
                        </div>
                    </div>
                </section>
            </div>    
        );
    }       


export default Restaurant;

{/* if empty string return true
                if neightbourhood is not empty string run test on r */}