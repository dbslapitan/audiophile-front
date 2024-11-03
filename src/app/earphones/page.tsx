import Title from "@/ui/title/title";
import styles from "./page.module.scss";
import Hook from "@/ui/hook/hook";
import ThumbnailNav from "@/ui/thumbnail-nav/thumbnail-nav";
import Products from "@/ui/products/products";
import axios from "axios";

const URI = process.env.NEXT_PUBLIC_URI;

export default async function Page(){

    const {data} = await axios.get(`${URI}/earphones`);

    return(
        <main className={`${styles["earphones"]}`}>
            <Title text="EARPHONES"/>
            <Products data={data}/>
            <nav className={`content ${styles["earphones__subnav"]}`}>
                <ThumbnailNav overlay={false} />
            </nav>
            <Hook />
        </main>
    );
}