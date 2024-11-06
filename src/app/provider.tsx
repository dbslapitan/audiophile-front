"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export const CartContext = createContext<ICartContext>({cartList: [], setCartList: () => {}});

export function Providers({children}: {children: ReactNode}){

    const [cartList, setCartList] = useState<string[]>([]);
    
    return(
        <CartContext.Provider value={{cartList, setCartList}}>
            {children}
        </CartContext.Provider>
    );
}

interface ICartContext{
    cartList: string[],
    setCartList: Dispatch<SetStateAction<string[]>>
}