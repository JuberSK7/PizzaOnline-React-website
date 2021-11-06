import React from 'react';
import './Order.css';
import connect from "../src/Images/connect2.png";

// ********************    *********** Order SEction  *************              **************************//

const Order = () => {
    return (
        <div>
            <section className="order" id="order">

                <h1 className="heading">orderd <span> Online</span></h1>

                <div className="row">
                    <form action="">
                        <input
                            type="text"
                            placeholder=" enter your name"
                            className="box"
                        />

                        <input
                            type="email"
                            placeholder="enter your email"
                            className="box"
                        />

                        <input
                            type="password"
                            placeholder="enter your password"
                            className="box"
                        />

                        <input
                            type="number"
                            placeholder="enter your number"
                            className="box"
                        />

                        <input
                            type="pizza name"
                            placeholder="enter your pizza name"
                            className="box"
                        />

                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="box-address"
                            placeholder="enter your address">
                        </textarea>

                        <input
                            type="submit"
                            value="order now"
                            className="btn"
                        />

                    </form>

                    <div className="image">
                        <img src={connect} alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Order;
