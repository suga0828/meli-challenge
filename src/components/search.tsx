import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search-icon.png';

const Search = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log((e.target as any).query.value);
  };

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-4 flex justify-center">
        <Link to="/" className="flex items-center justify-center mr-4">
          <img src={logo} alt="Mercado Libre Brand" className="h-12 w-auto" />
        </Link> 

        <form className="w-4/5 flex rounded" onSubmit={onSubmit}>
          <input type="text" name="query" placeholder="Nunca dejes de buscar" className="grow rounded-l text-lg p-4" />
          <button className="bg-gray-e px-4 rounded-r flex items-center">
            <img className="h-6 w-6" src={searchIcon} alt="Click to search" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search