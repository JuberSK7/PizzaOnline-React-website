import React from 'react';
import './Service.css';
import pizza1 from "../src/Images/pizza1.png";
import pizza3 from "../src/Images/pizza3.png";
import pizza5 from "../src/Images/pizza5.png";
import pizza6 from "../src/Images/pizza6.png";
import { Link } from 'react-router-dom';


const Service = () => {
    return (
        <div>
            <section className="service" id="service">

                <h1 className="heading">our most popular <span> pizza's </span></h1>

                <div className="box-container">
                    <div className="box">
                        <img src={pizza1} alt="" />
                        <h3>Brick oven pizza</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="price">₹125.00</div>
                        <Link href="https://www.zomato.com/pune"><button className="btn">orderd now</button></Link>
                    </div>

                    <div className="box">
                        <img src={pizza1} alt="" />
                        <h3>Chicago style</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>

                        <div className="price">₹125.00</div>
                        <Link href="https://www.zomato.com/pune"><button className="btn">orderd now</button></Link>
                    </div>
                    <div className="box">
                        <img src={pizza3} alt="" />
                        <h3>French break pizza</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>

                        <div className="price">₹125.00</div>
                        <Link href="https://www.zomato.com/pune"><button className="btn">orderd now</button></Link>
                    </div>
                    <div className="box">
                        <img src={pizza5} alt="" />
                        <h3>Italian pizza</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>

                        <div className="price">₹125.00</div>
                        <Link href="https://www.zomato.com/pune"><button className="btn">orderd now</button></Link>
                    </div>
                    <div className="box">
                        <img src={pizza3} alt="" />
                        <h3>New York style pizza</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>

                        <div className="price">₹125.00</div>
                        <Link href="https://www.zomato.com/pune"><button className="btn">orderd now</button></Link>
                    </div>
                    <div className="box">
                        <img src={pizza1} alt="" />
                        <h3>delicious pizza's</h3>
                        <div className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>

                        <div className="price">₹125.00</div>
                        <Link href="https://www.zomato.com/pune"><button className="btn">orderd now</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service;






