import Hook from "@/ui/hook/hook";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`${styles["home"]}`}>
        <section className={`${styles["hero"]}`}>
            <div className={`${styles["hero__left"]}`}>
                <h2 className={`${styles["hero__new"]}`}>NEW PRODUCT</h2>
                <h1 className={`${styles["hero__heading"]}`}>XX99 MARK II HEADPHONES</h1>
                <p className={`${styles["hero__description"]}`}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link href={`/`} className={`${styles["hero__link"]}`}>SEE PRODUCT</Link>
            </div>
            <div className={`${styles["hero__right"]}`}>
            </div>
        </section>
        <Hook />
    </main>
  );
}
