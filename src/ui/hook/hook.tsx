import Image from "next/image";
import styles from "./hook.module.scss";
import mobile from "../../../public/images/hook/mobile-best-gear.jpg";
import tablet from "../../../public/images/hook/tablet-best-gear.jpg";
import desktop from "../../../public/images/hook/desktop-best-gear.jpg";

export default function Hook(){

    return(
        <section className={`content--fix ${styles["hook"]}`}>
            <picture className={`${styles["hook__image"]}`}>
                <source srcSet={mobile.src} media="(max-width: 767px)"/>
                <source srcSet={tablet.src} media="(min-width: 768px) and (max-width: 1233px)"/>
                <source srcSet={desktop.src} media="(min-width: 1234px)"/>
                <img src={mobile.src} alt="a person touching the headphone he is wearing" />
            </picture>
            <div className={`${styles["hook__last"]}`}>
                <h4 className={`${styles["hook__heading"]}`}>Bringing you the <span  className={`${styles["hook__heading--peach"]}`}>&nbsp;best&nbsp;</span> audio gear</h4>
                <p className={`${styles["hook__description"]}`}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </section>
    );
}