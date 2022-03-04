import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search-icon.png';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate({
      pathname: '/items',
      search: `?search=${query}`,
    });
  };

  useEffect(() => {
    setQuery(searchParams.get('search') || '');
  }, [searchParams]);

  return (
    <div className="bg-primary h-12 flex items-center md:h-24">
      <div className="w-11/12 max-w-screen-2xl mx-auto flex items-center">
        <Link to="/" className="flex items-center justify-center mr-4">
          <img
            src={logo}
            alt="Mercado Libre Brand"
            className="h-6 md:h-12 w-auto"
          />
        </Link>

        <form className="w-4/5 flex rounded grow" onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={query}
            type="text"
            name="query"
            placeholder="Nunca dejes de buscar"
            className="grow rounded-l text-sm md:text-lg p-2"
          />
          <button className="bg-gray-e px-4 rounded-r flex items-center">
            <img
              className="h-4 w-4 md:h-5 md:w-5"
              src={searchIcon}
              alt="Click to search"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
