import styles from "../styles/Footer.module.css";

export default function Footer() {
  const dataAtual = new Date();

  return (
    <footer className={styles.footer}>
      <p>Curso de Next.js &copy; {dataAtual.getFullYear()}</p>
    </footer>
  );
}
