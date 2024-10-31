import Hook from "@/ui/hook/hook";
import styles from "./page.module.scss";
import Link from "next/link";
import mobile from "../../public/images/home/mobile-hero.jpg";
import tablet from "../../public/images/home/tablet-hero.jpg";
import desktop from "../../public/images/home/desktop-hero.jpg";

export default function Home() {
  return (
    <main className={`${styles["home"]}`}>
        <section className={`${styles["hero"]}`}>
            <div className={`${styles["hero__left"]}`}>
                <h2 className={`${styles["hero__new"]}`}>NEW PRODUCT</h2>
                <h1 className={`${styles["hero__heading"]}`}>XX99 MARK II HEADPHONES</h1>
                <p className={`${styles["hero__description"]}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link href={`/`} className={`btn btn--peach ${styles["hero__link"]}`}>SEE PRODUCT</Link>
            </div>
            <picture className={`${styles["hero__right"]}`}>
                <source media="(max-width: 767px)" srcSet={mobile.src}/>
                <source media="(min-width: 768px) and (max-width: 1233px)" srcSet={tablet.src}/>
                <source media="(min-width: 1234px)" srcSet={desktop.src}/>
                <img src={mobile.src} alt="xx99 mark 2 headphone" />
            </picture>
        </section>
        <Hook />
    </main>
  );
}
