import Image from "next/image";
import logo from "../../../public/logo.svg";
import hamburger from "../../../public/icons/icon-hamburger.svg";
import cart from "../../../public/icons/icon-cart.svg";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header(){
    return(
        <header className={`${styles["header"]}`}>
            <div className={`content ${styles["header__content"]}`}>
                <button>
                    <Image src={hamburger} alt="hamburger icon" height={15} width={16}/>
                </button>
                <Link href={"/"}>
                    <Image src={logo} alt="audiophile logo" height={25} width={143}/>
                </Link>
                <Link href={"#"}>
                    <Image src={cart} alt="cart icon" width={23} height={20}/>
                </Link>
            </div>
        </header>
    );
}