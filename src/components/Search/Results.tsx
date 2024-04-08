interface SearchResultListProps {
  results: string[];
}

const SearchResultList = ({ results }: SearchResultListProps) => {
  return (
    <div>
      {results.map((result, index) => (
        <li key={index}>{result}</li>
      ))}
    </div>
  );
};

export default SearchResultList;
