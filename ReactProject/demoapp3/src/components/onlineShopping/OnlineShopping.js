import './OnlineShopping.css';
import React,{ useState } from "react";
import axios from "axios";
function OnlineShopping() {
    const [card, setCard] = useState([]);

    const allData = () => {
        axios
        .get('https://fakestoreapi.com/products')
        .then((res) => {
            console.log(res.data);
            setCard(res.data);
        })
        .catch((err) => { })
    }
    const getData = (category) => {
        axios
        .get(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => {
            console.log(res.data);
            setCard(res.data);
        })
        .catch((err) => { })
    }
    return (
        <div id="container">
            <div id="radios">
                <form>
                    <div className="radioBtn">
                        <input type="radio" name="option" value='all' id="all" onClick={allData} />All
                    </div>
                    <div className="radioBtn">
                        <input type="radio" name="option" value="ele" id="ele" onClick={() => getData("electronics")} />Electronics
                    </div>
                    <div className="radioBtn">
                        <input type="radio" name="option" value='jewel' id="jewel" onClick={() => getData("jewelery")} />Jewelry
                    </div>
                    <div className="radioBtn">
                        <input type="radio" name="option" value='MF' id="MF" onClick={() => getData("men's clothing")} />Men's Fashion
                    </div>
                    <div className="radioBtn">
                        <input type="radio" name="option" value='WF' id="WF" onClick={() => getData("women's clothing")} />Women's Fashion
                    </div>
                </form>
            </div>
            <div id="product">
                {
                    card.length > 0 ? (
                        card.map((ele) => {
                            return (
                                <div className='card'>
                                    <img src={ele.image} width={100} height={100} alt='' />
                                    <p>
                                        <b>Title:</b>{ele.title}<br />
                                        <b>Price:</b>{ele.price}<br />
                                        <button>Buy Now</button>
                                        <button>Add to Cart</button>
                                    </p>
                                </div>)
                        })
                    ) : (<img src='https://image.freepik.com/free-vector/yellow-background-diwali-discounts_1017-4535.jpg' width="423%" height="100%" style={{textAlign:'center'}} alt=''/>)
                }
            </div>
        </div>
    )
}

export default OnlineShopping;

