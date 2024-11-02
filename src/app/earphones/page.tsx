import Title from "@/ui/title/title";
import styles from "./page.module.scss";
import Hook from "@/ui/hook/hook";
import ThumbnailNav from "@/ui/thumbnail-nav/thumbnail-nav";
import Products from "@/ui/products/products";
import { Product } from "@/models/product";
import yx1Mobile from "../../../public/images/earphones/yx1/category/mobile-yx1.jpg";
import yx1Tablet from "../../../public/images/earphones/yx1/category/tablet-yx1.jpg";
import yx1Desktop from "../../../public/images/earphones/yx1/category/desktop-yx1.jpg";

export default function Page(){

    const earphones: Product[] = [{
        isNew: true,
        category: "earphones",
        name: "YX1 WIRELESS",
        description: "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
        urlSegment: "yx1-wireless",
        images: {
            mobile: {
                src: yx1Mobile.src,
                mediaQuery: "(max-width: 767px)"
            },
            tablet: {
                src: yx1Tablet.src,
                mediaQuery: "(min-width: 768px) and (max-width: 1233px)"
            },
            desktop: {
                src: yx1Desktop.src,
                mediaQuery: "(min-width: 1234px)"
            }
        },
        alt: "yx1 wireless image"
    }];

    return(
        <main className={`${styles["earphones"]}`}>
            <Title text="EARPHONES"/>
            <Products data={earphones}/>
            <nav className={`content ${styles["earphones__subnav"]}`}>
                <ThumbnailNav overlay={false} />
            </nav>
            <Hook />
        </main>
    );
}