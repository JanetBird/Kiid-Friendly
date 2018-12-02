import React from 'react';
import img2 from './assets/image-2.jpeg';
import img3 from './assets/image-3.jpg';

const Main = () => {
    return (
        <div>
            <section className="learnMore">
                <div className="learnMore__text">
                    <h3>Find the restaurants near you</h3>
                    <p>Our list of restaurants, that are accomodating to families and children, is growing everyday. Get info such as high chair availability, stroller parking, and promotions for <span>Kid Friendly</span> users.</p>
                    <li className="learnMore__button"><a href="#">Learn More</a></li>
                </div>

                <div className="learnMore__img">
                    <img src={img2} alt="Family eating in cafe"/>
                </div>
            </section>

            <section className="learnMore">
                <div className="learnMore__img">
                    <img src={img3} alt="Interior of a busy modern restaurant" />
                </div>
                <div className="learnMore__text">
                    <h3>Easy Reservations and Rewards</h3>
                    <p>Find the restaurant that suits you and your family, easily make reservations through <span>Kid Friendly</span>, and earn rewards</p>
                    <li className="learnMore__button"><a href="#">Learn More</a></li>
                </div>
            </section>
            
        </div>
    );
}
export default Main;