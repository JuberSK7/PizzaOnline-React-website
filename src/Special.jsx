import React from 'react';
import './Special.css';
import pic1 from "../src/Images/pic1.jpg";
import pic2 from "../src/Images/pic2.jpg";
import pic3 from "../src/Images/pic3.jpg";
import pic4 from "../src/Images/pic4.jpg";
import pic5 from "../src/Images/pic5.jpg";
import pic6 from "../src/Images/pic6.jpg";

function Special() {
    return (
        <div>
             <section className="special" id="special">

<h1 className="heading">our special <span> food's </span></h1>
<div className="box-container">

    <div className="box">
        <img src={pic1} alt=""/>
        <h3>Luger Burger</h3>
    </div>

    <div className="box">
        <img src={pic2} alt=""/>
        <h3> Le Pigeon Burger</h3>
    </div>

    <div className="box">
        <img src={pic3} alt=""/>
        <h3>Double Animal Style</h3>
    </div>

    <div className="box">
        <img src={pic4} alt=""/>
        <h3>The Original Burger</h3>
    </div>

    <div className="box">
        <img src={pic5} alt=""/>
        <h3> Whiskey King Burger</h3>
    </div>

    <div className="box">
        <img src={pic6} alt=""/>
        <h3> The Company Burger</h3>
    </div>

</div>

</section>

        </div>
    )
}

export default Special;
