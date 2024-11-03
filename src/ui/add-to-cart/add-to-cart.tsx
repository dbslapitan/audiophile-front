"use client";

import { useState } from "react";
import styles from "./add-to-cart.module.scss";

export default function AddToCart(){

    const [count, setCount] = useState(1);

    const addHandler = () => {
        setCount(count + 1);
    }

    return(
        <div className={`${styles["add"]}`}>
            <div className={`${styles["add__counter"]}`}>
                <button className={`${styles["add__button"]} ${styles["add__button--minus"]}`}>-</button>
                <input className={`${styles["add__count"]}`} type="number" defaultValue={count} disabled/>
                <button className={`${styles["add__button"]} ${styles["add__button--plus"]}`} onClick={addHandler}>+</button>
            </div>
            <button className={`btn btn--peach ${styles["add__submit"]}`}>ADD TO CART</button>
        </div>
    );
}