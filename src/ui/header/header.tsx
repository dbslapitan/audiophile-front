import Image from "next/image";
import logo from "../../../public/logo.svg";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header(){
    return(
        <header className={`${styles["header"]}`}>
            <Link href={"/"}>
                <Image src={logo} alt="audiophile logo" height={25} width={143}/>
            </Link>
        </header>
    );
}