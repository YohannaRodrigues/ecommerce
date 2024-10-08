import { ChangeEvent, useState } from "react";
interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenSearch = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex">
      <input
        className={`rounded-2xl ${isOpen ? "block" : "hidden"}  `}
        type="text"
        placeholder="Faça sua busca..."
        value={value}
        onChange={onChange}
      />
      <button className="flex text-xs" onClick={OpenSearch}>
        <svg
          width="17"
          height="19"
          viewBox="0 0 17 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.4426 12.8396L11.4425 12.8396L11.3221 12.9674L11.3197 12.97L11.3197 12.9699C10.2262 14.0984 8.75733 14.7315 7.22563 14.7289M11.4426 12.8396L13.0963 8.5137C13.0961 5.09399 10.4826 2.29921 7.22605 2.29921C3.96858 2.29921 1.35579 5.09421 1.35579 8.51407C1.35579 11.9329 3.96833 14.7287 7.22563 14.7289M11.4426 12.8396L11.4449 12.837M11.4426 12.8396L11.4449 12.837M7.22563 14.7289L7.22605 14.4789V14.7289C7.22591 14.7289 7.22577 14.7289 7.22563 14.7289ZM11.4449 12.837C12.5074 11.6774 13.0986 10.1258 13.0963 8.51407L11.4449 12.837ZM12.6717 13.1498L12.5445 13.3182L12.6893 13.4719L15.9665 16.9492L15.1739 17.7904L11.9179 14.3339L11.7549 14.1609L11.5739 14.3149C10.3388 15.3658 8.80488 15.9355 7.22643 15.9332H7.22605C3.38915 15.9332 0.25 12.6236 0.25 8.51407C0.25 4.40457 3.38915 1.09497 7.22605 1.09497C11.063 1.09497 14.2021 4.40457 14.2021 8.51407V8.5144C14.2044 10.2013 13.6635 11.8366 12.6717 13.1498Z"
            fill="white"
            stroke="white"
            stroke-width="0.5"
          />
        </svg>
        BUSCAR
      </button>
    </div>
  );
};

export default SearchInput;
