
import './Product.css';

const Product = (props) => {
    const {title, description, rate, count, price, category, image} = props;
    return (
       
            <div className="container">
                <div className="product">
                    <img src={image} alt="" />
                    <div className="product__details">
                        <h4 className="product__title">{title}</h4>
                        <p>Price: $ {price}</p>
                        <p>Rating: product rating {rate}/{count}</p>
                        <p className="product__desc">Description: {description}</p>
                        <button className="product__btn btn">Add to cart</button>
                    </div>
                </div>
            </div>
    );
}

export default Product;