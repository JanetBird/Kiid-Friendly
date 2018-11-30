import React from 'react';

const Restaurant = (props) => {
        return (
            <div>
                <h2>{props.name}</h2>
                <h3>{props.address}</h3>
                <p>KF Rating: {props.kfRating}</p>
                <p>No. of Highchairs: {props.highchairs}</p>
                <p>Stroller Accessibility: {props.strollerAcc}</p>
                <p>{props.description}</p>
                <p>❤️  {props.likes}</p>
                <button onClick={props.updateLikes} value={props.id}>Like</button>
            </div>    
        );
    }       


export default Restaurant;

{/* if empty string return true
                if neightbourhood is not empty string run test on r */}