import Hook from "@/ui/hook/hook";
import styles from "./page.module.scss";
import Link from "next/link";
import mobile from "../../public/images/home/mobile-hero.jpg";
import tablet from "../../public/images/home/tablet-hero.jpg";
import desktop from "../../public/images/home/desktop-hero.jpg";
import ThumbnailNav from "@/ui/thumbnail-nav/thumbnail-nav";
import  zx9Tablet from "../../public/images/home/mobile-zx9.png";

export default function Home() {
    return (
        <main className={`${styles["home"]}`}>
            <section className={`${styles["hero"]}`}>
                <div className={`${styles["hero__left"]}`}>
                    <h2 className={`${styles["hero__new"]}`}>NEW PRODUCT</h2>
                    <h1 className={`${styles["hero__heading"]}`}><span className={`${styles["hero__heading--double"]}`}>XX99 MARK II HEADPHONES</span></h1>
                    <p className={`${styles["hero__description"]}`}><span className={`${styles["hero__description--double"]}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</span></p>
                    <div className={`${styles["hero__link"]}`}>
                        <Link href={`/`} className={`btn btn--peach`}>SEE PRODUCT</Link>
                    </div>
                </div>
                <picture className={`${styles["hero__right"]}`}>
                    <source media="(max-width: 767px)" srcSet={mobile.src} />
                    <source media="(min-width: 768px) and (max-width: 1439px)" srcSet={tablet.src} />
                    <source media="(min-width: 1440px)" srcSet={desktop.src} />
                    <img src={mobile.src} alt="xx99 mark 2 headphone" />
                </picture>
            </section>
            <section className={`${styles["zx9"]}`}>
                <picture className={`${styles["zx9__picture"]}`}>
                    <img className={`${styles["zx9__image"]}`} src={zx9Tablet.src} alt="zx9 speaker" />
                </picture>
                <div className={`${styles["zx9__last"]}`}>
                    <h2 className={`${styles["zx9__title"]}`}>ZX9 SPEAKER</h2>
                    <p className={`${styles["zx9__description"]}`}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link className={`btn btn--black ${styles["zx9__link"]}`} href={"/"}>SEE PRODUCT</Link>
                </div>
            </section>
            <nav className={`content ${styles["home__subnav"]}`}>
                <ThumbnailNav overlay={false} />
            </nav>
            <Hook />
        </main>
    );
}
