import React, {useState, useEffect} from "react";
import ProductItem from "./ProductItem";

function ProductList(props){
    const [products, setProducts] = useState("");

    useEffect(() => {
        fetch('http://127.0.0.1:5000/Products', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('API call failed');
                }
            })
            .then(data => setProducts(data))
            .catch(error => console.log(error));
        }, []);

    return(
        <div className="product-list">
            {(products) ? <ProductItem products={products} handleCartAdd={props.handleCartAdd} /> : ""}
        </div>
    );
};
export default ProductList;