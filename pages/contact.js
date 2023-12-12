import Head from "next/head";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contatos</title>
        <meta name="description" content="Página de contatos"></meta>
      </Head>
      <div>
        <h1>Página de Contato</h1>
        <Link href="/">Voltar</Link>
      </div>
    </>
  );
}
