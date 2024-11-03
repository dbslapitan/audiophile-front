import { Product } from "@/models/product";
import styles from "./products.module.scss";
import Link from "next/link";

const URI = process.env.NEXT_PUBLIC_URI;

export default function Products({data}: {data: Product[]}){
    return(
        <ul className={`content ${styles["products"]}`}>
            {
                data.map((product, index) => {

                    const isSwitch = (index + 1) % 2 === 0;

                    return(
                        <li key={`${product.name}`} className={`${styles["product"]}`}>
                            <picture className={`${styles["product__picture"]}`}>
                                <source srcSet={`${URI}${product.categoryImage.mobile}`} media="(max-width: 767px)"/>
                                <source srcSet={`${URI}${product.categoryImage.tablet}`} media="(min-width: 768px) and (max-width: 1233px)"/>
                                <source srcSet={`${URI}${product.categoryImage.desktop}`} media="(min-width: 1234px)"/>
                                <img className={`${styles["product__image"]}`} src={`${URI}${product.categoryImage.mobile}`} alt={product.alt} />
                            </picture>
                            <div className={`${styles["product__texts"]} ${product.isNew ? "" : styles["product__texts--old"]} ${isSwitch ? styles["product__texts--switch"] : ""}`}>
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