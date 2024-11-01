import { Product } from "@/models/product";
import styles from "./products.module.scss";
import Link from "next/link";

export default function Products({data}: {data: Product[]}){
    return(
        <ul className={`content ${styles["products"]}`}>
            {
                data.map((product, index) => {
                    return(
                        <li key={`${product.name}`} className={`${styles["product"]}`}>
                            <picture className={`${styles["product__picture"]}`}>
                                <source srcSet={product.images.mobile.src} media={product.images.mobile.mediaQuery}/>
                                <source srcSet={product.images.tablet.src} media={product.images.tablet.mediaQuery}/>
                                <source srcSet={product.images.desktop.src} media={product.images.desktop.mediaQuery}/>
                                <img className={`${styles["product__image"]}`} src={product.images.mobile.src} alt={product.alt} />
                            </picture>
                            <div className={`${styles["product__texts"]} ${product.isNew ? "" : styles["product__texts--old"]}`}>
                                <h3 className={`${styles["product__new"]} ${product.isNew ? styles["product__new--show"] : ""}`}>NEW PRODUCT</h3>
                                <h2 className={`${styles["product__name"]}`}>{product.name} <span className={`${styles["product__category"]}`}>{product.category}</span></h2>
                                <p className={`${styles["product__description"]}`}>{product.description}</p>
                                <Link href={`/${product.category}/${product.urlSegment}`} className={`btn btn--peach ${styles["product__link"]}`}>SEE PRODUCT</Link>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}