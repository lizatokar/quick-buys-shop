import delivery from "../Assets/Images/Buttons/delivery.jpg";
import guarantee from "../Assets/Images/Buttons/guarantee.jpg";
import support from "../Assets/Images/Buttons/support.jpg";
import payment from "../Assets/Images/Buttons/payment.png";

let buttons = {
    one: {
        img: delivery,
        heading: "Delivery in 1-5 days",
        p: "Choose ExpressDrop service for nationwide post office delivery with tracking using an express waybill number, or opt for Store Pickup to order online and collect at the nearest Quick Buys store.",
    },
    two: {
        img: guarantee,
        heading: "Policy for returns or exchanges",
        p: "You are entitled to return any product purchased online or exchange it within 14 days of delivery, no questions asked.",
    },
    three: {
        img: support,
        heading: "Around-the-clock support",
        p: "Should you encounter any issues with your order or payment, our experts will reach out to you within 15 minutes.",
    },
    four: {
        img: payment,
        heading: "Online payment on the website",
        p: "You can conveniently pay for a purchase on the website using the Way for Pay secure payment service. You can make a full payment by entering all the necessary details of your card and confirming the payment.",
    },
};

export default buttons;
