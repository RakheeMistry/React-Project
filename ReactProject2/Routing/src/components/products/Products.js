import React, { useState } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";

function Products() {
    const [state, setState] = useState([]);

    // useEffect(()=>{
    //     getProductsData('electronics');
    // }, []);

    const getProductsData = (categoryname) => {
        axios.get(`https://fakestoreapi.com/products/category/${categoryname}`)
            .then((res) => {
                console.log(res.data);
                document.title = res.data[0].category;
                setState(res.data);
            })
            .catch(() => {
                alert("Error while getting the data");
            });
    }
    return (
        <div className="productContainer">
            <div className="left">
                <button onClick={() => { getProductsData('electronics') }}>Electronics</button>
                <button onClick={() => { getProductsData('jewelery') }}>Jewellery</button>
                <button onClick={() => { getProductsData("men's clothing") }}>Men's Clothing</button>
                <button onClick={() => { getProductsData("women's clothing") }}>Women's Clothing</button>
            </div>
            <div className="right">
                {state.length > 0 ?
                    (<div className="items">
                        {state.map((element) => {
                            return <div className="productcard">
                                <img src={element.image} width={100} height={200} alt="product" />
                                <h4>{element.title}</h4>
                                <p>${element.price}</p>
                                <Link to={`/productDetails/${element.id}`}>
                                    <button>Product Details</button>
                                </Link>
                            </div>
                        })}
                    </div>
                    ) : (
                        <div className="noProducts">
                            <h2>No Products To Display</h2>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Products;