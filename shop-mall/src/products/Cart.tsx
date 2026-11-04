import { useCart } from "../context/CartContext";
import { useProduct } from "../context/ProductContext";

const Cart = () => {
    const { cartItems } = useCart();
    const { products } = useProduct();

    return (
        <section className="cart">
            <h2>장바구니</h2>
            {cartItems.length === 0 ? (
                <p className="cart_empty">장바구니가 비어있습니다.</p>
            ) : (
                <>
                    <ul className="cart_list">
                        {cartItems.map(item => {
                            const product = products.find(p => p.id === item.productId)
                            return (
                                <li key={item.productId} className="cart_item">
                                    {/* 상품 정보 */}
                                    <div className="cart_info">
                                        <span>{product?.category}</span>
                                        <span> {product?.pName}</span>
                                        <span> {item.qty} 개</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </>
            )}
        </section>
    )
}

export default Cart;