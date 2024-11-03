import Title from "@/ui/title/title";
import styles from "./page.module.scss";
import Hook from "@/ui/hook/hook";
import Products from "@/ui/products/products";
import ThumbnailNav from "@/ui/thumbnail-nav/thumbnail-nav";
import axios from "axios";
import { notFound } from "next/navigation";

const URI = process.env.NEXT_PUBLIC_URI;

export default async function Page(){

    try{
        const {data} = await axios.get(`${URI}/speakers`);

        return(
            <main className={`${styles["speakers"]}`}>
                <Title text="EARPHONES"/>
                <Products data={data}/>
                <nav className={`content ${styles["speakers__subnav"]}`}>
                    <ThumbnailNav overlay={false} />
                </nav>
                <Hook />
            </main>
        );
    }
    catch(e){
        console.log(e);
        notFound();
    }
}