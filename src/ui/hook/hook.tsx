import styles from "./hook.module.scss";
import mobile from "../../../public/images/hook/mobile-best-gear.jpg";
import tablet from "../../../public/images/hook/tablet-best-gear.jpg";
import desktop from "../../../public/images/hook/desktop-best-gear.jpg";

export default function Hook(){

    return(
        <section className={`content--fix ${styles["hook"]}`}>
            {/* <Image
                src={mobile}
                alt="a person touching the headphone he is wearing"
                className={`${styles["hook__image"]} ${styles["hook__image--mobile"]}`}
                height={300}
            />
            <Image
                src={tablet}
                alt="a person touching the headphone he is wearing"
                className={`${styles["hook__image"]} ${styles["hook__image--tablet"]}`}
                height={300}
            />
            <Image
                src={desktop}
                alt="a person touching the headphone he is wearing"
                className={`${styles["hook__image"]} ${styles["hook__image--desktop"]}`}
                height={588}
            /> */}
            <img 
            className={`${styles["hook__image"]}`} 
            src={mobile.src} alt="a person touching the headphone he is wearing" 
            loading="lazy"
            fetchPriority="high"
            decoding="async"
            srcSet={`${desktop.src} 540w, ${mobile.src} 654w, ${tablet.src} 1378w`}
            sizes={`(min-width: 0px) and (max-width: 768px) 654px, (min-width: 769px) and (max-width: 1234px) 1378px, (min-width: 1235px) 540px, 654px`}/>
            <div className={`${styles["hook__last"]}`}>
                <h4 className={`${styles["hook__heading"]}`}>Bringing you the <span  className={`${styles["hook__heading--peach"]}`}>&nbsp;best&nbsp;</span> audio gear</h4>
                <p className={`${styles["hook__description"]}`}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </section>
    );
}