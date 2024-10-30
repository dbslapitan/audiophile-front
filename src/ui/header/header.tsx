import Image from "next/image";
import logo from "../../../public/logo.svg";
import cart from "../../../public/icons/icon-cart.svg";
import styles from "./header.module.scss";
import Link from "next/link";
import NavToggle from "../nav-toggle/nav-toggle";

export default function Header(){
    return(
        <header className={`${styles["header"]}`}>
            <div className={`content ${styles["header__content"]}`}>
                <NavToggle />
                <Link href={"/"}>
                    <Image src={logo} alt="audiophile logo" height={25} width={143}/>
                </Link>
                <Link href={"#"} className={`${styles["header__cart"]}`}>
                    <Image src={cart} alt="cart icon" width={23} height={20}/>
                </Link>
            </div>
        </header>
    );
}