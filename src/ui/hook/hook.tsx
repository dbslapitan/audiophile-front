import Image from "next/image";
import styles from "./hook.module.scss";
import mobile from "../../../public/images/hook2/mobile-best-gear.png";
import tablet from "../../../public/images/hook2/tablet-best-gear.png";
import desktop from "../../../public/images/hook2/desktop-best-gear.png";

export default function Hook(){

    return(
        <section className={`content--fix ${styles["hook"]}`}>
            {/* <Image
                src={mobile}
                alt="a person touching the headphone he is wearing"
                className={`${styles["hook__image"]}`}
                height={300}
                overrideSrc={`${mobile.src} 375w, ${tablet.src} 768w, ${desktop.src} 1234w`}
                sizes="(min-width: 375px) 100%, (min-width: 768px) 100%"
            /> */}
            <img src={mobile.src} alt="a person touching the headphone he is wearing"
            sizes="(max-width: 688px) 327px, 540px"
                className={`${styles["hook__image"]}`} srcSet={`${mobile.src} 327w, ${tablet.src} 689w, ${desktop.src} 540w`}
            />
            <h4 className={`${styles["hook__heading"]}`}>Bringing you the <span  className={`${styles["hook__heading--peach"]}`}>&nbsp;best&nbsp;</span> audio gear</h4>
            <p className={`${styles["hook__description"]}`}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </section>
    );
}