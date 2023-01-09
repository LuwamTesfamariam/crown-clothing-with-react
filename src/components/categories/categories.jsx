import { useSyncExternalStore } from 'react'
import './categories.style.scss'
import CategoryItem from '../category-item/category-item';


const Categories = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem
                    key={category.id}
                    prop={category}
                />
            ))}
        </div>
    )
}

export default Categories;