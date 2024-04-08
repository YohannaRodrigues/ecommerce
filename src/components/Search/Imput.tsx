import { ChangeEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchInput = ({ value, onChange, onClick }: SearchInputProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Faça sua pesquisa..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick}>Pesquisar</button>
    </div>
  );
};

export default SearchInput;
