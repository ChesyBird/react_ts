import { Link } from "react-router-dom";
import type { Product } from "../types/product"; 

const ProductCard = ({product}: {product: Product}) => {

    return (
        <div className="product-card">
            <span>{product.category}</span>
            <h3>
                <Link to={`/product/${product.id}`}>{product.pName}</Link>
            </h3>
            <p>{product.price.toLocaleString()} 원</p>
        </div>
    )
}

export default ProductCard;