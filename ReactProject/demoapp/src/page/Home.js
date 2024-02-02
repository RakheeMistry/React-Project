import Nav from  "../component/nav/Nav";
import Header from "../component/header/Header";
import "./Home.css";
import Carousel from "../component/carousel/Carousel";
function Home (){
    return (
        <div className="back">
            <Nav/>
            <div style={{display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:"10px 20px 20px 20px",
            backgroundColor:"white"}}>
            <Header title="Grocery" image="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"/>
            <Header title="Electronics" image="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"/>
            <Header title="Fashion" image="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"/>
            <Header title="Home & Furniture" image="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"/>
            <Header title="Beauty,Toys & More" image="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"/>
            </div>
            <div>
                <Carousel/>
            </div>
        </div>
    );
}

export default Home;