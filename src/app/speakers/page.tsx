import Title from "@/ui/title/title";
import styles from "./page.module.scss";
import Hook from "@/ui/hook/hook";
import { Product } from "@/models/product";
import zx9Mobile from "../../../public/images/speakers/zx9/category/mobile-zx9.jpg";
import zx9Tablet from "../../../public/images/speakers/zx9/category/tablet-zx9.jpg";
import zx9Desktop from "../../../public/images/speakers/zx9/category/desktop-zx9.jpg";
import zx7Mobile from "../../../public/images/speakers/zx7/category/mobile-zx7.jpg";
import zx7Tablet from "../../../public/images/speakers/zx7/category/tablet-zx7.jpg";
import zx7Desktop from "../../../public/images/speakers/zx7/category/desktop-zx7.jpg";
import Products from "@/ui/products/products";
import ThumbnailNav from "@/ui/thumbnail-nav/thumbnail-nav";

export default function Page(){

    const speakers: Product[] = [{
        isNew: true,
        category: "speakers",
        name: "ZX9",
        description: "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
        urlSegment: "zx9",
        images: {
            mobile: {
                src: zx9Mobile.src,
                mediaQuery: "(max-width: 767px)"
            },
            tablet: {
                src: zx9Tablet.src,
                mediaQuery: "(min-width: 768px) and (max-width: 1233px)"
            },
            desktop: {
                src: zx9Desktop.src,
                mediaQuery: "(min-width: 1234px)"
            }
        },
        alt: "zx9 image"
    }, {
        isNew: false,
        category: "speakers",
        name: "ZX7",
        description: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
        urlSegment: "zx7",
        images: {
            mobile: {
                src: zx7Mobile.src,
                mediaQuery: "(max-width: 767px)"
            },
            tablet: {
                src: zx7Tablet.src,
                mediaQuery: "(min-width: 768px) and (max-width: 1233px)"
            },
            desktop: {
                src: zx7Desktop.src,
                mediaQuery: "(min-width: 1234px)"
            }
        },
        alt: "zx7 image"
    }];

    return(
        <main className={`${styles["speakers"]}`}>
            <Title text="SPEAKERS"/>
            <Products data={speakers}/>
            <nav className={`content ${styles["speakers__subnav"]}`}>
                <ThumbnailNav overlay={false} />
            </nav>
            <Hook />
        </main>
    );
}