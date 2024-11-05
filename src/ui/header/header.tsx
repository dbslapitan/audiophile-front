import Image from "next/image";
import logo from "../../../public/logo.svg";
import styles from "./header.module.scss";
import Link from "next/link";
import NavToggle from "../nav-toggle/nav-toggle";
import NavLinks from "../nav-links/nav-links";
import CartToggle from "../cart-toggle/cart-toggle";

export default function Header(){
    return(
        <header className={`${styles["header"]}`}>
            <div className={`content ${styles["header__content"]}`}>
                <NavToggle />
                <Link href={"/"}>
                    <Image src={logo} alt="audiophile logo" height={25} width={143}/>
                </Link>
                <NavLinks className={`${styles["header__links"]}`}/>
                <CartToggle />
            </div>
        </header>
    );
}