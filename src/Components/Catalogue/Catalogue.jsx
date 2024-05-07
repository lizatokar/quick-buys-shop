import {useEffect, useState} from "react";
import "./Catalogue.css";
import "./CatalogueItem/CatalogueItem";
import CatalogueItem from "./CatalogueItem/CatalogueItem";
import axios from "axios";

const Catalogue = () => {
    let [products, setProducts] = useState([]);
    let [selectedPrice, setSelectedPrice] = useState("");
    let [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data));
    }, []);

    const handlePriceChange = (e) => {
        setSelectedPrice(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filterProductsByPrice = (product) => {
        if (selectedPrice === "lessThan50") {
            return product.price < 50;
        } else if (selectedPrice === "from50To100") {
            return product.price >= 50 && product.price <= 100;
        } else if (selectedPrice === "moreThan100") {
            return product.price > 100;
        } else {
            return true;
        }
    };

    const filterProductsByCategory = (product) => {
        if (selectedCategory === "women's clothing") {
            return product.category === "women's clothing";
        } else if (selectedCategory === "men's clothing") {
            return product.category === "men's clothing";
        } else if (selectedCategory === "jewelery") {
            return product.category === "jewelery";
        } else if (selectedCategory === "electronics") {
            return product.category === "electronics";
        } else {
            return true;
        }
    };

    let content;
    if (products.length > 0) {
        const filteredProducts = products.filter(filterProductsByPrice).filter(filterProductsByCategory);
        if (filteredProducts.length > 0) {
            content = filteredProducts.map((product) => (
                <CatalogueItem key={product.id} product={product}/>
            ));
        } else {
            content = <h2 className="notFound">No items match your selection</h2>;
        }
    } else {
        content = <h1 className="loading">Loading...</h1>;
    }

    return (
        <div className="catalogue">
            <h4>Choose price:</h4>
            <select onChange={handlePriceChange} className="selectWithPrice">
                <option value="">not selected</option>
                <option value="lessThan50">Less than 50$</option>
                <option value="from50To100">50-100$</option>
                <option value="moreThan100">More than 100$</option>
            </select>
            <h4>Choose category:</h4>
            <select onChange={handleCategoryChange} className="selectWithCategory">
                <option value="">not selected</option>
                <option value="women's clothing">Women</option>
                <option value="men's clothing">Men</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
            </select>
            <div className="catalogueContainer">
                {content}
            </div>
        </div>
    );
};

export default Catalogue;
