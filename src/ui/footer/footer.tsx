import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import facebook from "../../../public/icons/icon-facebook.svg";
import twitter from "../../../public/icons/icon-twitter.svg";
import instagram from "../../../public/icons/icon-instagram.svg";
import NavLinks from "../nav-links/nav-links";

export default function Footer() {
    return (
        <footer className={`${styles["footer"]}`}>
            <div className={`content--fix`}>
                <span className={`${styles["footer__block"]}`}></span>
            </div>
            <nav className={`content--fix ${styles["footer__content"]}`}>
                <Link href={`/`} className={`${styles["footer__logo"]}`}>
                    <Image src={logo} alt="site logo" height={25} width={143} />
                </Link>
                <NavLinks />
                <p className={`${styles["footer__description"]}`}>Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
                <p className={`${styles["footer__description"]}`}>Copyright 2021. All Rights Reserved</p>
                <ul className={`${styles["socials"]}`}>
                    <li>
                        <a href={"https://www.facebook.com"} target="_blank">
                            <Image className={`${styles["socials__image"]}`} src={facebook} alt="facebook logo" height={24} width={24} />
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.twitter.com"} target="_blank">
                            <Image className={`${styles["socials__image"]}`} src={twitter} alt="twitter logo" height={20} width={24} />
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.instagram.com"} target="_blank">
                            <Image className={`${styles["socials__image"]}`} src={instagram} alt="instagram logo" height={24} width={24} />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}