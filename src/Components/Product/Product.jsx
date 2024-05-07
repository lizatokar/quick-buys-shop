import {useEffect, useState} from "react";
import "./Product.css";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const Product = (props) => {
    let {productId} = useParams();

    let [product, setProduct] = useState({});
    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => setProduct(response.data));
    }, []);

    let navigate = useNavigate();

    const backHandler = () => {
        navigate("/catalogue");
    };

    let [likes, setLikes] = useState(10);
    let [dislikes, setDislikes] = useState(4);

    const likeHandler = () => {
        setLikes(likes + 1);
    };

    const dislikeHandler = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <div className="containerProduct">
            <button onClick={backHandler} className="backToCatalogue">
                Back to Catalogue
            </button>
            {product.id ? (
                <div className="product">
                    <div className="productImageContainer">
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <div className="description">
                        <h1>{product.title}</h1>
                        <h2>Price: {product.price}$</h2>
                        <p>
                            <b>Category: </b>
                            {product.category}
                        </p>
                        <p>{product.description}</p>
                        <p>
                            <b>Rating: </b>
                            {Math.round(likes / dislikes)}
                        </p>
                        <div className="buttons">
                            <button onClick={likeHandler} className="likeButton">
                                Like {likes}
                            </button>
                            <button onClick={dislikeHandler} className="dislikeButton">
                                Dislike {dislikes}
                            </button>
                        </div>
                        <Reviews reviews={props.reviews}/>
                    </div>
                </div>
            ) : (
                <h1 className="loading">Loading...</h1>
            )}
        </div>
    );
};

export default Product;
