import React from 'react'

type Props = {
  categories: string[]
  filterItems: (category: string) => void
}

const Categories = ({ filterItems, categories }: Props) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories
