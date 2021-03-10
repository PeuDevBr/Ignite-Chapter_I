import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

// https://api.github.com/orgs/rocketseat/repos

/*const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
}; (deletado)*/

export function RepositoryList() {
  const [repositories, setRepositores] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositores(data))
  }, []);
  // [repositories] - toda vez que a variável repositories mudar a função é chamada
  // se o array for vazio a função só executa uma vez (quando o componente for carregado)
  // CUIDADO - não deixar sem o segundo parâmetro ",[...]"
  // CUIDADO - não alterar o valor da váriavél que chama a função dentro da função => setRepositores(...) -> dentro da função useEffect

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map( repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
          //toda vez que usar map (no React) tem que passar a propriedade key com um valor único
        })}
      </ul>
    </section>
  );
}
