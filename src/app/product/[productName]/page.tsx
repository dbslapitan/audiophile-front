import axios from "axios";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";

const URI = process.env.NEXT_PUBLIC_URI;

export default async function ProductPage({params}: {params: {productName: string}}){

    try{
        const dynamicSegments = await params;
        const {data} = await axios.get(`${URI}/product/${dynamicSegments.productName}`);
    
        return(
            <main className={`${styles["product"]}`}>
                
            </main>
        );
    }
    catch(e){
        console.log(e);
        notFound();
    }
}