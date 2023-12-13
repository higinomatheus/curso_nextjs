import styles from "../../styles/Todos.module.css";

import Head from "next/head";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");

  const todos = await data.json();

  // console.log(todos);
  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <Head>
        <title>Tarefas</title>
      </Head>
      <h1>Tarefas a Fazer</h1>
      <div>
        <label>Quantidade: </label>
        <span>{todos.filter((todo) => todo.completed == false).length}</span>
      </div>
      <ul className={styles.todolist}>
        {todos.map((todo) => {
          if (todo.completed == false) {
            return <li key={todo.id}>{todo.title}</li>;
          }
          return null;
        })}
      </ul>
    </>
  );
}
