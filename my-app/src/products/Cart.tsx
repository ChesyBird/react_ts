import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart, totalPrice, dispatch } = useCart();

    return (
        <div>
            <h2>장바구니</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name} x {item.qty}
                        <p>금액 : {item.price * item.qty} 원</p>
                        <button onClick={()=>{
                            dispatch({type: "REMOVE", id: item.id})
                        }}>삭제</button>
                    </li>
                ))}
            </ul>
            <h3>총액 : {totalPrice.toLocaleString()} 원</h3>
        </div>
    )
}

export default Cart;