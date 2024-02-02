import React from "react";
import "./Products.css";
import { Link,  Outlet } from "react-router-dom";

function Products(){
    return(
        <div>
            <div className="nestedProductsContainer">
                <div className="left">
                    <Link to="electronics" className="linkStyle">Electronics</Link>
                    <Link to="jewelery" className="linkStyle">Jewelery</Link>
                    <Link to="menclothing" className="linkStyle">Men's Clothing</Link>
                    <Link to="womenclothing" className="linkStyle">Women's Clothing</Link>
                </div>
                <div className="right">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default Products;