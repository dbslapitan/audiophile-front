import axios from "axios";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCart from "@/ui/add-to-cart/add-to-cart";

const URI = process.env.NEXT_PUBLIC_URI;

export default async function ProductPage({ params }: { params: { productName: string } }) {

    try {
        const dynamicSegments = await params;
        const { data } = await axios.get(`${URI}/product/${dynamicSegments.productName}`);

        return (
            <main className={`${styles["product"]}`}>
                <section className={`content ${styles["heading"]}`}>
                    <Link href={`/${data.category}`} className={`${styles["product__back"]}`}>Go Back</Link>
                    <picture className={`${styles["heading__picture"]}`}>
                        <source srcSet={`${URI}${data.image.mobile}`} media="(max-width: 767px)" />
                        <source srcSet={`${URI}${data.image.tablet}`} media="(min-width: 768px) and (max-width: 1233px)" />
                        <source srcSet={`${URI}${data.image.desktop}`} media="(min-width: 1234px)" />
                        <img className={`${styles["heading__image"]}`} src={`${URI}${data.image.mobile}`} alt={data.alt} />
                    </picture>
                    <div className={`${styles["heading__texts"]} ${data.new ? "" : styles["heading__texts--old"]}`}>
                        <h3 className={`${styles["heading__new"]} ${data.new ? styles["heading__new--show"] : ""}`}>NEW PRODUCT</h3>
                        <h1 className={`${styles["heading__name"]}`}>{data.name} <span className={`${styles["heading__category"]}`}>{data.category}</span></h1>
                        <p className={`${styles["heading__description"]}`}>{data.description}</p>
                        <h4 className={`${styles["heading__price"]}`}>${data.price}</h4>
                        <AddToCart />
                    </div>
                </section>
            </main>
        );
    }
    catch (e) {
        console.log(e);
        notFound();
    }
}