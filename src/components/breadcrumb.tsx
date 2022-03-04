import { Link } from 'react-router-dom';

const Breadcrumb = ({ categoryTree }: { categoryTree: string[] }) => {
  return (
    <div className="w-11/12 max-w-screen-2xl mx-auto">
      <div className="py-4">
        {categoryTree.map((category, i, arr) => (
          <Link
            className={`text-gray-9 hover:text-gray-6 ${
              i === arr.length - 1 ? 'font-bold' : ''
            }`}
            key={i}
            to={`/items?q=${category}`}
          >
            {category}
            {i === arr.length - 1 ? '' : ' > '}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
