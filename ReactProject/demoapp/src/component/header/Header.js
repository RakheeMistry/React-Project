import "./Header.css";

function Header(Props){
    return (
        <div className="card">
            <div>
            <img src={Props.image} alt="" />
            <h3>{Props.title}</h3>
            </div>
        </div>
    )
}

export default Header;