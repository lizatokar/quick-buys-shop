import "./Main.css";
import {useEffect, useState} from "react";
import axios from "axios";
import MonthProducts from "./MonthProducts/MonthProducts";
import YearProducts from "./YearProducts/YearProducts";

const Main = (props) => {
    let [monthProducts, setMonthProducts] = useState([]);
    let [yearProducts, setYearProducts] = useState([]);
    let [button, setButton] = useState({
        img: props.buttons.one.img,
        heading: props.buttons.one.heading,
        p: props.buttons.one.p,
    });

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            const monthItems = response.data.filter(
                (item) => item.id >= 1 && item.id <= 3
            );
            const yearItems = response.data.filter(
                (item) => item.id >= 15 && item.id <= 20
            );
            setMonthProducts(monthItems);
            setYearProducts(yearItems);
        });
    }, []);

    function showButtonOne() {
        setButton({
            img: props.buttons.one.img,
            heading: props.buttons.one.heading,
            p: props.buttons.one.p,
        });
    }

    function showButtonTwo() {
        setButton({
            img: props.buttons.two.img,
            heading: props.buttons.two.heading,
            p: props.buttons.two.p,
        });
    }

    const showButtonThree = () => {
        setButton({
            img: props.buttons.three.img,
            heading: props.buttons.three.heading,
            p: props.buttons.three.p,
        });
    };

    const showButtonFour = () => {
        setButton({
            img: props.buttons.four.img,
            heading: props.buttons.four.heading,
            p: props.buttons.four.p,
        });
    };

    return (
        <main>
            <div className="main">
                <div className="aboutUs">
                    <h1>We are Quick Buys</h1>
                    <p>
                        Quick Buys is an e-commerce platform offering a wide range of
                        clothing for both men and women, as well as jewelry and electronics.
                        Established in 2019 in New York, our brand was conceived in the pursuit
                        of the ideal dress, jeans, and blouse that would complement diverse
                        body types and suit any occasion. Over time, we have diversified our
                        product line to include jewelry options to enhance your attire.
                    </p>
                    <p>
                        Continuing to evolve rapidly, we have now introduced electronic
                        items, with plans for further expansion. Thus, the essence of our
                        brand is encapsulated in the core values of quality,
                        accessibility, and versatility.
                    </p>
                </div>
                <h2>What we offer:</h2>
                <div className="four-buttons">
                    <button onClick={showButtonOne}>Fast Delivery</button>
                    <button onClick={showButtonTwo}>Returns or Exchanges</button>
                    <button onClick={showButtonThree}>24/7 Support</button>
                    <button onClick={showButtonFour}>Payment Methods</button>
                </div>
                <div className="buttons-content">
                    <div>
                        <h3>{button.heading}</h3>
                        <p>{button.p}</p>
                    </div>
                    <img src={button.img} alt={button.heading} className="images"/>
                </div>
                <h2>Best of the month</h2>
                <div className="monthBestItems">
                    {monthProducts.length > 0 ? (
                        monthProducts.map((product) => (
                            <MonthProducts key={product.id} product={product}/>
                        ))
                    ) : (
                        <h2 className="loading">Loading...</h2>
                    )}
                </div>
                <h2>Best of the year</h2>
                <div className="yearBestItems">
                    {yearProducts.length > 0 ? (
                        yearProducts.map((product) => (
                            <YearProducts key={product.id} product={product}/>
                        ))
                    ) : (
                        <h2 className="loading">Loading...</h2>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;
