import React from 'react';
import './Home.css';
import home from "../src/Images/homeimg1.png";

function Home() {
    return (
        // ************** Home Section ********************//
        <div>
            <>
            <section className="home" id="home">

        <div className="content">
            <h3>we belive good food offer great smile</h3>
            <p>Pizza Is An Italian Dish Consisting Of A Usually Round, Flattened Base Of Leavened Wheat-Based Dough
                Topped With Tomatoes, Cheese, And.</p>
            <a href=""><button className="btn">get started</button></a>
        </div>

        <div className="image">
            <img src={home} alt="home"/>
        </div>


    </section>

            </>
        </div>
    )
}

export default Home;
