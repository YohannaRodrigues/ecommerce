import { useState, ChangeEvent } from "react";
import SearchInput from "./Imput";
import SearchResultList from "./Results";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = async () => {
    try {
      // Simulando uma chamada de API com um atraso de 1 segundo (para simular uma resposta assíncrona)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Aqui você substituiria esta parte com a chamada real à sua API de busca
      // Você passaria o searchTerm como parâmetro e receberia os resultados
      const fakeApiResponse = ["Resultado 1", "Resultado 2", "Resultado 3"];

      // Atualizando os resultados da pesquisa com os resultados obtidos
      setSearchResults(fakeApiResponse);
    } catch (error) {
      console.error("Erro ao realizar a pesquisa:", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <SearchInput value={searchTerm} onChange={handleChange} />

      <SearchResultList results={searchResults} />
    </div>
  );
};

export default Search;
