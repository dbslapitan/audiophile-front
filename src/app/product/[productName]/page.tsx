import axios from "axios";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import Link from "next/link";
import AddToCart from "@/ui/add-to-cart/add-to-cart";
import Hook from "@/ui/hook/hook";
import ThumbnailNav from "@/ui/thumbnail-nav/thumbnail-nav";

const URI = process.env.NEXT_PUBLIC_URI;

export default async function ProductPage({ params }: { params: Promise<{productName: string}>}) {

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
                        <AddToCart product={{name: data.name, slug: data.slug, price: data.price}} />
                    </div>
                </section>
                <section className={`content ${styles["additional"]}`}>
                    <div className={`${styles["features"]}`}>
                        <h2 className={`${styles["additional__title"]}`}>FEATURES</h2>
                        <p className={`${styles["additional__paragraph"]}`}>{data.features}</p>
                    </div>
                    <div className={`${styles["items"]}`}>
                        <h2 className={`${styles["additional__title"]}`}>IN THE BOX</h2>
                        <ul className={`${styles["items__list"]}`}>
                            {
                                (data.includes as {quantity: number, item: string}[]).map((item, index) => {
                                    return(
                                        <li key={index} className={`${styles["item"]}`}><span className={`${styles["item__quantity"]}`}>{item.quantity}x</span>{item.item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
                <div className={`${styles["gallery"]}`}>
                    <picture className={`${styles["gallery__picture"]}`}>
                        <source  srcSet={`${URI}${data.gallery.first.mobile}`} media="(max-width: 767px)"/>
                        <source  srcSet={`${URI}${data.gallery.first.tablet}`} media="(min-width: 768px) and (max-width: 1233px)"/>
                        <source  srcSet={`${URI}${data.gallery.first.desktop}`} media="(min-width: 1234px)"/>
                        <img src={`${URI}${data.gallery.first.mobile}`} alt="first image of gallery" className={`${styles["gallery__image"]}`}/>
                    </picture>
                    <picture className={`${styles["gallery__picture"]}`}>
                        <source  srcSet={`${URI}${data.gallery.second.mobile}`} media="(max-width: 767px)"/>
                        <source  srcSet={`${URI}${data.gallery.second.tablet}`} media="(min-width: 768px) and (max-width: 1233px)"/>
                        <source  srcSet={`${URI}${data.gallery.second.desktop}`} media="(min-width: 1234px)"/>
                        <img src={`${URI}${data.gallery.second.mobile}`} alt="first image of gallery" className={`${styles["gallery__image"]}`}/>
                    </picture>
                    <picture className={`${styles["gallery__picture"]} ${styles["gallery__picture--third"]}`}>
                        <source  srcSet={`${URI}${data.gallery.third.mobile}`} media="(max-width: 767px)"/>
                        <source  srcSet={`${URI}${data.gallery.third.tablet}`} media="(min-width: 768px) and (max-width: 1233px)"/>
                        <source  srcSet={`${URI}${data.gallery.third.desktop}`} media="(min-width: 1234px)"/>
                        <img src={`${URI}${data.gallery.third.mobile}`} alt="first image of gallery" className={`${styles["gallery__image"]}`}/>
                    </picture>
                </div>
                <nav className={`${styles["recommendations"]}`}>
                    <h2 className={`${styles["recommendations__title"]}`}>YOU MAY ALSO LIKE</h2>
                    <ul className={`${styles["recommendations__list"]}`}>
                        {
                           ( data.others as {slug: string, name: string, image: {mobile: string, tablet: string, desktop: string}}[]).map((product) => {
                                return(
                                    <li key={product.slug} className={`${styles["recommendations__item"]}`}>
                                        <picture className={`${styles["recommendations__picture"]}`}>
                                            <source  srcSet={`${URI}${product.image.mobile}`} media="(max-width: 767px)"/>
                                            <source  srcSet={`${URI}${product.image.tablet}`} media="(min-width: 768px) and (max-width: 1233px)"/>
                                            <source  srcSet={`${URI}${product.image.desktop}`} media="(min-width: 1234px)"/>
                                            <img src={`${product.image.mobile}`} alt="" className={`${styles["recommendation__image"]}`} />
                                        </picture>
                                        <h3 className={`${styles["recommendations__name"]}`}>{product.name}</h3>
                                        <Link href={`/product/${product.slug}`} className={`btn btn--peach ${styles["recommendations__link"]}`}>SEE PRODUCT</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <nav className={`${styles["thumbnail"]}`}>
                    <ThumbnailNav />
                </nav>
                <Hook />
            </main>
        );
    }
    catch (e) {
        console.log(e);
        notFound();
    }
}