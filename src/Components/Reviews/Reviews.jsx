import {useEffect, useState} from "react";
import Review from "./Review/Review";
import "./Reviews.css";

const Reviews = (props) => {
    let [reviews, setReviews] = useState(props.reviews);

    let [currentReview, setCurrentReview] = useState("");
    let [currentUser, setCurrentUser] = useState("");
    let [currentTitle, setCurrentTitle] = useState("");

    const currentReviewHandler = (e) => {
        let currentReview = e.currentTarget.value;
        setCurrentReview(currentReview);
    };

    const addReviewHandler = () => {
        let review = {
            userId: currentUser,
            id: reviews.length + 1,
            title: currentTitle,
            body: currentReview,
            date: new Date().toLocaleString(),
        };

        setReviews([review, ...reviews]);
    };

    const currentUserHandler = (e) => {
        let user = e.currentTarget.value;
        setCurrentUser(user);
    };

    const currentTitleHandler = (e) => {
        setCurrentTitle(e.currentTarget.value);
    };

    return (
        <div className="reviews">
            <div className="containerInput">
                <h2>Add a name:</h2>
                <input type="text" onChange={currentUserHandler}/>
                <h2>Add a title:</h2>
                <input type="text" onChange={currentTitleHandler}/>
                <h2>Add a review:</h2>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    onChange={currentReviewHandler}
                ></textarea>
            </div>
            <button onClick={addReviewHandler} className="addReviewButton">
                Add Review
            </button>
            <h2 className="reviewTitle">Reviews:</h2>
            {reviews.map((review) => (
                <Review key={review.id} review={review}/>
            ))}
        </div>
    );
};

export default Reviews;
