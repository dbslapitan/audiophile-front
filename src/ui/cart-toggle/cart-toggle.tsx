"use client";

import Image from "next/image";
import styles from "./cart-toggle.module.scss";
import cart from "../../../public/icons/icon-cart.svg";
import { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import { IItem } from "@/models/item";

export default function CartToggle() {

    const [cartOpen, setCartOpen] = useState(false);
    const [items, setItems] = useState<IItem[] | null>(null);

    useEffect(() => {

        const clickListener = () => {
            if (cartOpen) {
                setCartOpen(false);
                document.body.style.overflow = "auto";
            }
        }

        const escListener = (event: KeyboardEvent) => {
            if (event.key === "Escape" && cartOpen) {
                setCartOpen(false);
            }
        }

        window.addEventListener("click", clickListener);
        window.addEventListener("keyup", escListener);

        return () => {
            window.removeEventListener("click", clickListener);
            window.removeEventListener("keyup", escListener);
        }
    }, [cartOpen, items]);

    const toggle = (event: ReactMouseEvent) => {
        event.stopPropagation();
        if (!cartOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
        setCartOpen(!cartOpen);
    }

    return (
        <div className={`${styles["cart"]}`}>
            <button className={`${styles["cart__toggle"]}`} onClick={toggle}>
                <Image src={cart} alt="cart icon" width={23} height={20} />
            </button>
            <div className={`${styles["cart__overlay"]} ${cartOpen ? styles["cart__overlay--show"] : ""}`}>
                <section className={`${styles["cart__container"]}`} onClick={(event: ReactMouseEvent) => { event.stopPropagation() }}>
                    <h3>CART ({items?.length || 0})</h3>
                </section>
            </div>
        </div>
    );
}