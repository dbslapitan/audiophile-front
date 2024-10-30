import Hook from "@/ui/hook/hook";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={`${styles["home"]}`}>
        <Hook />
    </main>
  );
}
