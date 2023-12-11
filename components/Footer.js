export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return <p>Curso de Next.js &copy; {anoAtual}</p>;
}
