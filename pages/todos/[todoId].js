import Link from "next/link";

import { useRouter } from "next/router";

export default function Todo() {
  const router = useRouter();

  const todoId = router.query.todoId; // O Next faz uma associação automática entre o nome do arquivo e o param passado

  return (
    <>
      <Link href="/">Voltar</Link>
      <h1>Exibindo o todo: {todoId}</h1>
      <p>
        Comentário: lá lá lá...
        <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link>
      </p>
      <p>
        Comentário: le le le...
        <Link href={`/todos/${todoId}/comments/2`}>Detalhes</Link>
      </p>
      <p>
        Comentário: li li li...
        <Link href={`/todos/${todoId}/comments/3`}>Detalhes</Link>
      </p>
    </>
  );
}
