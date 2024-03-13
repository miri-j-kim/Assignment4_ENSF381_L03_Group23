import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import reviews from '../data/reviews.js';

function HomeMainSection(){
    const navigate = useNavigate();

    function handleShopButton(){
        navigate("/Products")
    };

    const mainStyle ={
        textAlign: 'left',
    };
    const reviewStyle ={
        paddingBottom: '10px',
    };

    const [review1, setReview1] = useState(0);
    const [review2, setReview2] = useState(0);

    useEffect(()=> {
        let index1 = Math.floor(Math.random() * reviews.length)
        let index2 = Math.floor(Math.random() * reviews.length)
        while (index1 === index2){
            index2 = Math.floor(Math.random() * reviews.length)
        };

        setReview1(reviews[index1]);
        setReview2(reviews[index2]);
    },[]);

    function rating (numStars) {
        const stars = Array.from({length: numStars}, ()=> <span className="star">&#9733;</span>);
        return (
          <div className="rating">
            {stars}
          </div>
        );
      };

    return(
        <div>
            <div style={mainStyle} className='about'>
                <h1>About Us</h1>
                <p>Welcome! We offer a variety of products from phonecases to lip tints. We strive to provide the best product quality and customer service.</p>
                <button onClick={handleShopButton}>Shop now</button>
            </div>
            <div style={mainStyle} className='reviews'>
                <h1>Customer Reviews</h1>
                <div style={reviewStyle} className="review">
                    <div className="revName">{review1.customerName}</div>
                    <div className="revContent">{review1.reviewContent}</div>
                    {rating(review1.stars)}
                </div>
                <div style={reviewStyle} className="review">
                    <div className="revName">{review2.customerName}</div>
                    <div className="revContent">{review2.reviewContent}</div>
                    {rating(review2.stars)}
                </div>
            </div>
        </div>
    );
};

export default HomeMainSection;