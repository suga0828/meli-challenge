import { Link } from "react-router-dom"

const Breadcrumb = ({ categoryTree }: { categoryTree: string[]}) => {
  return (
    <div>
      {categoryTree.map((category, i, arr) => 
        <Link
          key={i}
          to={`/categories/${category}`}>
          {category}
          {i === arr.length - 1 ? '' : ' > '}
        </Link>  
      )}
    </div>
  )
}

export default Breadcrumb