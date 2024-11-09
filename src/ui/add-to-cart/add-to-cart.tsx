"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./add-to-cart.module.scss";
import { IItem } from "@/models/item";

export default function AddToCart({ product }: { product: { name: string, price: number, slug: string, src: string } }) {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [cart, setCart] = useState<IItem[] | null>(null);

    const item = cart?.find(product => product.slug === product.slug) || { ...product, quantity: 1 };

    useEffect(() => {
        const lsCart = localStorage.getItem("cart");
        if(!lsCart){
            localStorage.setItem("cart", JSON.stringify([]));
            setCart([]);
        }
        else{
            if(JSON.stringify(cart) !== lsCart){
                setCart(JSON.parse(lsCart));
            }
        }

    }, [cart]);

    const addHandler = () => {
        item.quantity = item.quantity + 1;
        (inputRef.current as HTMLInputElement).value = `${item.quantity}`;
    }

    const minusHandler = () => {
        if(item.quantity > 1){
            item.quantity = item.quantity - 1;
            (inputRef.current as HTMLInputElement).value = `${item.quantity}`;
        }
    }

    const addCartHandler = () => {
        if(cart){
            const index = cart.findIndex(x => x.slug === product.slug);
            if(index === -1){
                const temp = [...cart];
                temp.push(item);
            }
            else{
                cart[index] = item;
            }
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else{
            localStorage.setItem("cart", JSON.stringify([item]));
        }
    }

    return (
        <div className={`${styles["add"]}`}>
            <div className={`${styles["add__counter"]}`}>
                <button className={`${styles["add__button"]} ${styles["add__button--minus"]}`} onClick={minusHandler}>-</button>
                <input className={`${styles["add__count"]}`} type="number" defaultValue={item?.quantity || 1} disabled ref={inputRef} />
                <button className={`${styles["add__button"]} ${styles["add__button--plus"]}`} onClick={addHandler}>+</button>
            </div>
            <button className={`btn btn--peach ${styles["add__submit"]}`} onClick={addCartHandler}>ADD TO CART</button>
        </div>
    );
}