import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            (c) ARC Credit Card Bank 2024
        </div>
    )
}

Footer.defaultProps = {
    bgColor: 'bg-dark',
    textColor: 'text-success',
    active: 'true'
}
export default Footer;