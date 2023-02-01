// import { useSyncExternalStore } from 'react'
import './categories.style.scss'
import DirectoryItem from '../directory-item/directory-item'

const Categories = ({categories}) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <DirectoryItem
                    key={category.id}
                    prop={category}
                />
            ))}
        </div>
    )
}

export default Categories;