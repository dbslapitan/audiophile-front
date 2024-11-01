import Title from "@/ui/title/title";
import styles from "./page.module.scss";
import Hook from "@/ui/hook/hook";
import { Product } from "@/models/product";
import xx99m2Mobile from "../../../public/images/headphones/xx99-2/category/mobile-xx99-2.jpg";
import xx99m2Tablet from "../../../public/images/headphones/xx99-2/category/tablet-xx99-2.jpg";
import xx99m2Desktop from "../../../public/images/headphones/xx99-2/category/desktop-xx99-2.jpg";
import xx99m1Mobile from "../../../public/images/headphones/xx99-1/category/mobile-x99-1.jpg";
import xx99m1Tablet from "../../../public/images/headphones/xx99-1/category/tablet-x99-1.jpg";
import xx99m1Desktop from "../../../public/images/headphones/xx99-1/category/desktop-x99-1.jpg";
import Products from "@/ui/products/products";

export default function Page(){

    const headphones: Product[] = [{
        isNew: true,
        category: "headphones",
        name: "XX99 Mark II",
        description: "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
        urlSegment: "xx99-mark-ii",
        images: {
            mobile: {
                src: xx99m2Mobile.src,
                mediaQuery: "(max-width: 767px)"
            },
            tablet: {
                src: xx99m2Tablet.src,
                mediaQuery: "(min-width: 768px) and (max-width: 1233px)"
            },
            desktop: {
                src: xx99m2Desktop.src,
                mediaQuery: "(min-width: 1234px)"
            }
        },
        alt: "xx99 mark 2 image"
    }, {
        isNew: false,
        category: "headphones",
        name: "XX99 Mark I",
        description: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
        urlSegment: "xx99-mark-i",
        images: {
            mobile: {
                src: xx99m1Mobile.src,
                mediaQuery: "(max-width: 767px)"
            },
            tablet: {
                src: xx99m1Tablet.src,
                mediaQuery: "(min-width: 768px) and (max-width: 1233px)"
            },
            desktop: {
                src: xx99m1Desktop.src,
                mediaQuery: "(min-width: 1234px)"
            }
        },
        alt: "xx99 mark 2 image"
    }];

    return(
        <main className={`${styles["headphones"]}`}>
            <Title text="HEADPHONES"/>
            <Products data={headphones}/>
            <Hook />
        </main>
    );
}