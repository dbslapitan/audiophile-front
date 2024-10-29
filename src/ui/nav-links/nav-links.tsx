"use client";

import styles from "./nav-links.module.scss";
import hamburger from "../../../public/icons/icon-hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import headphones from "../../../public/thumbnails/image-category-thumbnail-headphones.png";
import earphones from "../../../public/thumbnails/image-category-thumbnail-earphones.png";
import speakers from "../../../public/thumbnails/image-category-thumbnail-speakers.png";
import { MouseEvent as ReactMouseEnvent, useEffect, useState } from "react";

export default function NavLinks() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const header = document.querySelector("header");
        const body = document.body;

        const globalCloseHandler = (event: MouseEvent) => {
            if(isOpen){
                setIsOpen(false);
            }
        }

        const escapeEvent = (event: KeyboardEvent) => {
            if(event.key === "Escape"){
                setIsOpen(false);
            }
        }

        window.addEventListener("click", globalCloseHandler);
        window.addEventListener("keyup", escapeEvent);

        return () => {
            window.removeEventListener("click", globalCloseHandler);
            window.removeEventListener("keyup", escapeEvent);
        }
    });

    const toggleHandler = (event: (ReactMouseEnvent)) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`${styles["nav"]}`} >
            <button className={`${styles["nav__toggle"]}`} onClick={toggleHandler}>
                <Image src={hamburger} alt="hamburger icon" height={15} width={16} />
            </button>
            <ul className={`${styles["nav__links"]} ${isOpen ? styles["nav__links--show"] : ""}`}>
                <li className={`${styles["nav__item"]} ${styles["nav__item--home"]}`}>
                    <Link href={"/"} className={`${styles["nav__link"]}`}>HOME</Link>
                </li>
                <li className={`${styles["nav__item"]} ${styles["nav__item--first"]}`}>
                    <Link href={"/headphones"} className={`content ${styles["nav__link"]}`}>
                        <Image src={headphones} alt="thumbnail for headphones category" className={`${styles["nav__image"]}`} height={104}/>
                        HEADPHONES
                        <span className={`${styles["nav__shop"]}`}>SHOP</span>
                    </Link>
                </li>
                <li className={`${styles["nav__item"]}`}>
                    <Link href={"/speakers"} className={`content ${styles["nav__link"]}`}>
                        <Image src={speakers} alt="thumbnail for speakers category" className={`${styles["nav__image"]}`} height={96}/>
                        SPEAKERS
                        <span className={`${styles["nav__shop"]}`}>SHOP</span>
                    </Link>
                </li>
                <li className={`${styles["nav__item"]}`}>
                    <Link href={"/earphones"} className={`content ${styles["nav__link"]}`}>
                    <Image src={earphones} alt="thumbnail for earphones category" className={`${styles["nav__image"]}`} height={96}/>
                    EARPHONES
                    <span className={`${styles["nav__shop"]}`}>SHOP</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}