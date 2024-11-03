import { Product } from "@/models/product";
import yx1Mobile from "../../public/images//earphones/yx1/category/mobile-yx1.jpg";
import yx1Tablet from "../../public/images//earphones/yx1/category/tablet-yx1.jpg";
import yx1Desktop from "../../public/images//earphones/yx1/category/desktop-yx1.jpg";
import xx99m2Mobile from "../../public/images//headphones/xx99-2/category/mobile-xx99-2.jpg";
import xx99m2Tablet from "../../public/images//headphones/xx99-2/category/tablet-xx99-2.jpg";
import xx99m2Desktop from "../../public/images//headphones/xx99-2/category/desktop-xx99-2.jpg";
import xx99m1Mobile from "../../public/images//headphones/xx99-1/category/mobile-x99-1.jpg";
import xx99m1Tablet from "../../public/images//headphones/xx99-1/category/tablet-x99-1.jpg";
import xx99m1Desktop from "../../public/images//headphones/xx99-1/category/desktop-x99-1.jpg";
import xx59Mobile from "../../public/images//headphones/xx59/category/mobile-xx59.jpg";
import xx59Tablet from "../../public/images//headphones/xx59/category/tablet-xx59.jpg";
import xx59MDesktop from "../../public/images//headphones/xx59/category/desktop-xx59.jpg";
import zx9Mobile from "../../public/images//speakers/zx9/category/mobile-zx9.jpg";
import zx9Tablet from "../../public/images//speakers/zx9/category/tablet-zx9.jpg";
import zx9Desktop from "../../public/images//speakers/zx9/category/desktop-zx9.jpg";
import zx7Mobile from "../../public/images//speakers/zx7/category/mobile-zx7.jpg";
import zx7Tablet from "../../public/images//speakers/zx7/category/tablet-zx7.jpg";
import zx7Desktop from "../../public/images//speakers/zx7/category/desktop-zx7.jpg";

export const DATA: Product[] = [{
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
}, {
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
    alt: "xx99 mark 1 image"
}, {
    isNew: false,
    category: "headphones",
    name: "XX59",
    description: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    urlSegment: "xx59",
    images: {
        mobile: {
            src: xx59Mobile.src,
            mediaQuery: "(max-width: 767px)"
        },
        tablet: {
            src: xx59Tablet.src,
            mediaQuery: "(min-width: 768px) and (max-width: 1233px)"
        },
        desktop: {
            src: xx59MDesktop.src,
            mediaQuery: "(min-width: 1234px)"
        }
    },
    alt: "xx59 image"
}, {
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