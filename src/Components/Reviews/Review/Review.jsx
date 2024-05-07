import "./Review.css";

const Review = (props) => {
    return (
        <div className="review">
            <h2>{props.review.title}</h2>
            <h3>Author: {props.review.userId}</h3>
            <p>{props.review.body}</p>
            <h6>{props.review.date}</h6>
        </div>
    );
};

export default Review;
