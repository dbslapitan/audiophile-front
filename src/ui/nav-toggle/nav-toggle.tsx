"use client";

import styles from "./nav-toggle.module.scss";
import hamburger from "../../../public/icons/icon-hamburger.svg";
import Image from "next/image";
import { MouseEvent as ReactMouseEnvent, useEffect, useState } from "react";
import ThumbnailNav from "../thumbnail-nav/thumbnail-nav";

export default function NavToggle() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if(isOpen){
            document.body.style.overflowY = "hidden";
        }
        else{
            document.body.style.overflowY = "auto";
        }

        const globalCloseHandler = () => {
            if(isOpen){
                setIsOpen(false);
            }
        }

        const escapeEvent = (event: KeyboardEvent) => {
            if(event.key === "Escape"){
                setIsOpen(false);
            }
        }

        const resizeHandler = () => {
            if(window.innerWidth <= 1234){
                if(isOpen){
                    setIsOpen(false);
                }
            }
        };

        window.addEventListener("click", globalCloseHandler);
        window.addEventListener("keyup", escapeEvent);
        window.addEventListener("resize", resizeHandler);

        return () => {
            window.removeEventListener("click", globalCloseHandler);
            window.removeEventListener("keyup", escapeEvent);
            window.removeEventListener("resize", resizeHandler);
        }
    });

    const toggleHandler = (event: (ReactMouseEnvent)) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    }

    return (
        <nav className={`${styles["nav"]}`} >
            <button className={`${styles["nav__toggle"]}`} onClick={toggleHandler}>
                <Image className={`${styles["nav__hamburger"]}`} src={hamburger} alt="hamburger icon" height={15} width={16} />
            </button>
            <div className={`${styles["nav__overlay"]} ${isOpen ? styles["nav__overlay--show"] : ""}`}>
                <div className={`${styles["nav__content"]}`}>
                    <ThumbnailNav overlay={true}/>
                </div>
            </div>
        </nav>
    );
}