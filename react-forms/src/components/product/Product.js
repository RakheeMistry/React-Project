import './Product.css';

let productCount = 0;
let isAvailable = 'Available';
let badgeClass = 'badge';
badgeClass = isAvailable === 'Available' ? 'bg-success' : 'bg-danger';

function displayFormattedProductCount(){
    return productCount > 0 ? productCount : 'zero';
}
function Products(props) {
    return (<ul className="list-group shadow">
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.description}</p>
                    <div className="d-flex align-items-center justify-content-start mt-1">
                        <h6 className="font-weight-bold mt-2" style={{marginRight: 30}}>{props.price}</h6>
                        <button className="btn btn-primary">-</button>
                        <span style={{padding: '8px 14px', fontSize: 13}}>{displayFormattedProductCount()}</span>
                        <button className="btn btn-primary">+</button>
                        <span className={badgeClass} style={{marginLeft: '240px',padding: '8px',borderRadius: '5px'}}>{isAvailable}</span>
                    </div>
                </div>
                <img src={props.imageUrl} width='200' alt='Generic placeholder' className="ml-lg-5 order-1 order-lg-2"/>
            </div>
        </li>
    </ul>)
}

export default Products;