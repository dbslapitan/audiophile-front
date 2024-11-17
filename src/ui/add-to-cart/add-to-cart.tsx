"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./add-to-cart.module.scss";
import { IItem } from "@/models/item";

export default function AddToCart({ product }: { product: { name: string, price: number, slug: string, src: string } }) {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [cart, setCart] = useState<IItem[]>([]);

    const item = cart.find(item => item.slug === product.slug) || { ...product, quantity: 1 };

    useEffect(() => {
        const lsCart = localStorage.getItem("cart") || "[]";
        if(JSON.stringify(cart) !== lsCart){
            setCart(JSON.parse(lsCart));
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
        const index = cart.findIndex(p => p.slug === item.slug);
        console.log(index);
        if(index === -1){
            localStorage.setItem("cart", JSON.stringify([...cart, item]));
        }
        else{
            const temp = [...cart];
            temp[index] = item;
            localStorage.setItem("cart", JSON.stringify(temp));
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