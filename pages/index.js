import styles from "../styles/Home.module.css";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="keywords" content="roupas, calçados, bonés"></meta>
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Página Inicial</h1>
      </div>
    </>
  );
}
