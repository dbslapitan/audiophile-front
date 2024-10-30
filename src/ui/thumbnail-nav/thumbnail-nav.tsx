import Link from "next/link";
import styles from "./thumbnail-nav.module.scss";
import Image from "next/image";
import headphones from "../../../public/thumbnails/image-category-thumbnail-headphones.png";
import earphones from "../../../public/thumbnails/image-category-thumbnail-earphones.png";
import speakers from "../../../public/thumbnails/image-category-thumbnail-speakers.png";

export default function ThumbnailNav() {
    
    return (
        <ul className={`content ${styles["links"]}`}>
            <li className={`${styles["links__item"]} ${styles["links__item--home"]}`}>
                <Link href={"/"} className={`${styles["links__link"]}`}>HOME</Link>
            </li>
            <li className={`${styles["links__item"]} ${styles["links__item--first"]}`}>
                <Link href={"/headphones"} className={`content ${styles["links__link"]}`}>
                    <Image src={headphones} alt="thumbnail for headphones category" className={`${styles["links__image"]}`} height={104} />
                    HEADPHONES
                    <span className={`${styles["links__shop"]}`}>SHOP</span>
                </Link>
            </li>
            <li className={`${styles["links__item"]}`}>
                <Link href={"/speakers"} className={`content ${styles["links__link"]}`}>
                    <Image src={speakers} alt="thumbnail for speakers category" className={`${styles["links__image"]}`} height={96} />
                    SPEAKERS
                    <span className={`${styles["links__shop"]}`}>SHOP</span>
                </Link>
            </li>
            <li className={`${styles["links__item"]}`}>
                <Link href={"/earphones"} className={`content ${styles["links__link"]}`}>
                    <Image src={earphones} alt="thumbnail for earphones category" className={`${styles["links__image"]}`} height={96} />
                    EARPHONES
                    <span className={`${styles["links__shop"]}`}>SHOP</span>
                </Link>
            </li>
        </ul>
    );
}