import Hook from "@/ui/hook/hook";
import styles from "./page.module.scss";
import Link from "next/link";
import mobile from "../../public/images/home/mobile-hero.jpg";
import tablet from "../../public/images/home/tablet-hero.jpg";
import desktop from "../../public/images/home/desktop-hero.jpg";
import ThumbnailNav from "@/ui/thumbnail-nav/thumbnail-nav";
import  zx9Mobile from "../../public/images/home/mobile-zx9.png";
import  zx9Tablet from "../../public/images/home/tablet-zx9.png";
import  zx9Desktop from "../../public/images/home/desktop-zx9.png";
import  zx7Mobile from "../../public/images/home/mobile-zx7.jpg";
import  zx7Tablet from "../../public/images/home/tablet-zx7.jpg";
import  zx7Desktop from "../../public/images/home/desktop-zx7.jpg";

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
                    <source media="(min-width: 768px) and (max-width: 1233px)" srcSet={tablet.src} />
                    <source media="(min-width: 1234px)" srcSet={desktop.src} />
                    <img src={mobile.src} alt="xx99 mark 2 headphone" />
                </picture>
            </section>
            <section className={`content ${styles["zx9"]}`}>
                <picture className={`${styles["zx9__picture"]}`}>
                    <source media="(max-width: 767px)" srcSet={zx9Mobile.src}/>
                    <source media="(min-width: 768px) and (max-width: 1439px)" srcSet={zx9Tablet.src}/>
                    <source media="(min-width: 1440px)" srcSet={zx9Desktop.src}/>
                    <img className={`${styles["zx9__image"]}`} src={zx9Mobile.src} alt="zx9 speaker" />
                </picture>
                <div className={`${styles["zx9__last"]}`}>
                    <h2 className={`${styles["zx9__title"]}`}>ZX9 SPEAKER</h2>
                    <p className={`${styles["zx9__description"]}`}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link className={`btn btn--black ${styles["zx9__link"]}`} href={"/"}>SEE PRODUCT</Link>
                </div>
            </section>
            <section className={`${styles["zx7"]}`}>
                <picture>
                    <source media="(max-width: 767px)" srcSet={zx7Mobile.src}/>
                    <source media="(min-width: 768px) and (max-width: 1439px)" srcSet={zx7Tablet.src}/>
                    <source media="(min-width: 1440px)" srcSet={zx7Desktop.src}/>
                    <img className={`${styles["zx7__image"]}`} src={zx7Mobile.src} alt="zx7 speaker" />
                </picture>
                <div className={`${styles["zx7__texts"]}`}>
                    <h2 className={`${styles["zx7__title"]}`}>ZX7 SPEAKER</h2>
                    <Link className={`btn btn--transparent ${styles["zx7__link"]}`} href={"/"}>SEE PRODUCT</Link>
                </div>
            </section>
            <nav className={`content ${styles["home__subnav"]}`}>
                <ThumbnailNav overlay={false} />
            </nav>
            <Hook />
        </main>
    );
}
