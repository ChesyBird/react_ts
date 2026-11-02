import type React from "react";
import { createContext, useContext } from "react";

// 전역 관리
// Product 타입 정의
export interface Product{
    id :    number;
    name :  string;
    price : number;
}

// CartItem(장바구니에 담기 한 상품) 타입 정의
export interface CartItem extends Product{
    qty: number; // 수량(quantitiy)
}

// 담기, 삭제 등의 액션 타입 정의
export type CartAction =
    |{type: "ADD", product: Product}
    |{type: "REMOVE", id: number}

// Context에 담을 값의 타입
interface CartContextType {
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>
}

// Context 생성
export const CartContext = createContext<CartContextType | null>(null);

// 커스텀 훅 - useCart()
export function useCart(): CartContextType{
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart는 CartProvider 안에서만 사용할 수 있습니다.")
    }
    return context;
}