import Link from "next/link";
import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import facebook from "../../../public/icons/icon-facebook.svg";
import twitter from "../../../public/icons/icon-twitter.svg";
import instagram from "../../../public/icons/icon-instagram.svg";

export default function Footer() {
    return (
        <footer className={`${styles["footer"]}`}>
            <div className={`${styles["footer__block"]}`}></div>
            <nav className={`content--fix ${styles["footer__content"]}`}>
                <Link href={`/`} className={`${styles["footer__logo"]}`}>
                    <Image src={logo} alt="site logo" height={25} width={143} />
                </Link>
                <ul className={`${styles["footer__links"]}`}>
                    <li>
                        <Link href={`/`} className={`${styles["footer__link"]}`}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link href={`/headphones`} className={`${styles["footer__link"]}`}>
                            HEADPHONES
                        </Link>
                    </li>
                    <li>
                        <Link href={`/speakers`} className={`${styles["footer__link"]}`}>
                            SPEAKERS
                        </Link>
                    </li>
                    <li>
                        <Link href={`/earphones`} className={`${styles["footer__link"]}`}>
                            EARPHONES
                        </Link>
                    </li>
                </ul>
                <p className={`${styles["footer__description"]}`}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
                <p className={`${styles["footer__description"]}`}>Copyright 2021. All Rights Reserved</p>
                <ul className={`${styles["socials"]}`}>
                    <li className={`${styles["socials__item"]}`}>
                        <a href={"https://www.facebook.com"} target="_blank">
                            <Image src={facebook} alt="facebook logo" height={24} width={24} />
                        </a>
                    </li>
                    <li className={`${styles["socials__item"]}`}>
                        <a href={"https://www.twitter.com"} target="_blank">
                            <Image src={twitter} alt="twitter logo" height={20} width={24} />
                        </a>
                    </li>
                    <li className={`${styles["socials__item"]}`}>
                        <a href={"https://www.instagram.com"} target="_blank">
                            <Image src={instagram} alt="instagram logo" height={24} width={24} />
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}