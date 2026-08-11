import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
  const [searchParams] = useSearchParams()

  const search = searchParams.get("q") || ""

  const { data: items, loading, error } = useFetch(
    "http://localhost:3000/products"
  )

  const filteredItems = items?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Resultados disponíveis</h1>

      {loading && <p>Carregando...</p>}
      {error && <p>Ocorreu um erro...</p>}

      <ul className="products">
        {filteredItems &&
          filteredItems.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/product/${item.id}`}>
                Detalhes
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Search