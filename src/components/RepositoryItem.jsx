export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      {/*Caso o repository esteja vazio o nome fica Default*/}
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>Acessar repositório</a>
    </li>
  )
}
