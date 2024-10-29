"use client";

import styles from "./nav-link.module.scss";
import hamburger from "../../../public/icons/icon-hamburger.svg";
import Image from "next/image";
import Link from "next/link";
import headphones from "../../../public/thumbnails/image-category-thumbnail-headphones.png";
import earphones from "../../../public/thumbnails/image-category-thumbnail-earphones.png";
import speakers from "../../../public/thumbnails/image-category-thumbnail-speakers.png";

export default function NavLinks() {
    return (
        <nav className={`${styles["nav"]}`}>
            <button>
                <Image src={hamburger} alt="hamburger icon" height={15} width={16} />
            </button>
            <ul className={`${styles["nav__links"]}`}>
                <li className={`${styles["nav__item"]}`}>
                    <Link href={"/headphones"}>
                        {/* <Image src={headphones} alt="thumbnail for headphones category" /> */}
                        Headphones
                    </Link>
                </li>
                <li className={`${styles["nav__item"]}`}>
                    <Link href={"/speakers"}>
                        {/* <Image src={speakers} alt="thumbnail for speakers category" /> */}
                        Speakers
                    </Link>
                </li>
                <li className={`${styles["nav__item"]}`}>
                    <Link href={"/earphones"}>
                    {/* <Image src={earphones} alt="thumbnail for earphones category" /> */}
                    Earphones
                    </Link>
                </li>
            </ul>
        </nav>
    );
}