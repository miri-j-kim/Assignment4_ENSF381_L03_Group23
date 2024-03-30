import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Cart from './Cart';
import {useNavigate} from 'react-router-dom';
import {useAuthContext} from '../App.js';

function Productpage(){
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const {authenticated} = useAuthContext(false);

    const navigate = useNavigate();

    useEffect(()=> {
        const itemsInLocal = JSON.parse(localStorage.getItem('cartItems') || "[]");
        setCartItems(itemsInLocal);

        let calculatedTotalPrice = 0;
        for (let i = 0; i < itemsInLocal.length; i++){
            calculatedTotalPrice += itemsInLocal[i].total;
        }
        setTotalPrice(calculatedTotalPrice);
    },[]);

    const handleCartAdd = (childData) => {
        
        let inCart = false;
        for (let i = 0 ; i < cartItems.length; i++){
            if (childData.id === cartItems[i].id){
                cartItems[i].quantity += 1;
                cartItems[i].total += childData.price;
                setTotalPrice(totalPrice + childData.price)
                inCart = true;
            }
        }
        if (cartItems.length === 0 || (inCart === false)){
            childData.quantity = 1
            childData.total = childData.price;
            cartItems.push(childData);
            setTotalPrice(totalPrice + childData.price);
        }
        setCartItems(cartItems);
        const string = JSON.stringify(cartItems)
        localStorage.setItem('cartItems', string);
        localStorage.setItem('totalPrice', totalPrice)
    }

    const handleCartRemove = (childData) => {
        for (let i = 0 ; i < cartItems.length; i++){
            if (childData.id === cartItems[i].id){
                cartItems[i].quantity -= 1;
                cartItems[i].total -= cartItems[i].price
                setTotalPrice(totalPrice - cartItems[i].price)
                if (cartItems[i].quantity === 0){
                    cartItems.splice(i, 1);
                }
                break
            }
        }
        setCartItems(cartItems);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    useEffect(() => {
        if (!authenticated){
            navigate(`/Login`)
        }
    }, [authenticated]);

    return(
        <div className="product-page">
            <Header />
            <table style={{width:"100%"}}>
                <tr>
                    <td style={{verticalAlign:"top"}}><ProductList handleCartAdd={handleCartAdd}/></td>
                    <td style={{verticalAlign:"top"}}><Cart handleCartRemove={handleCartRemove} totalPrice={totalPrice} cartItems={cartItems}/></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
};

export default Productpage;