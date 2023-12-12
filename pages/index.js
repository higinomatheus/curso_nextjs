import styles from "../styles/Home.module.css";

import Head from "next/head";
import Image from "next/image";

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
        {/* Considera o caminho da imagem a partir do diretorio public */}
        <Image
          src="/images/city.jpg"
          width={200}
          height={300}
          alt="Cidade à noite"
        />
      </div>
    </>
  );
}
