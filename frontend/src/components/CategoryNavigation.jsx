import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CategoryNavigation = () => {
    const navigate = useNavigate()
    const { category: urlCategory } = useParams()
    const [category, setCategory] = useState(urlCategory || '')

    const categories = ['Electronics', 'Snowboards', 'Outerwear', 'Boots']; 
  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);
  return (
    <div className="categories">
    {categories.map((cat) => (
        <button className={`category-button ${category === cat ? 'active-button' : ''}`}
          key={cat}
          onClick={() => {
            setCategory(cat);
            navigate(`/filter/${cat}`);
          }}
        >
          {cat}
        </button>

    ))}
  </div>
  )
}

export default CategoryNavigation