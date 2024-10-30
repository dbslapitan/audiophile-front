import Link from "next/link";
import styles from "./nav-links.module.scss";

export default function NavLinks({className = ""}: {className?: string}){
    return(
        <ul className={`${styles["links"]} ${className}`}>
            <li>
                <Link href={`/`} className={`${styles["links__link"]}`}>
                    HOME
                </Link>
            </li>
            <li>
                <Link href={`/headphones`} className={`${styles["links__link"]}`}>
                    HEADPHONES
                </Link>
            </li>
            <li>
                <Link href={`/speakers`} className={`${styles["links__link"]}`}>
                    SPEAKERS
                </Link>
            </li>
            <li>
                <Link href={`/earphones`} className={`${styles["links__link"]}`}>
                    EARPHONES
                </Link>
            </li>
        </ul>
    );
}