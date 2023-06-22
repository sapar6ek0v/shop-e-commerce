import React from 'react'

import { useGetAllCategoriesQuery } from '../../../../store/apis/products'
import { showTextByCategory } from '../../../../utils/showTextByCategory';
import { CategoriesGroup, CategoryItem } from './styles'

interface Props {
  currentCategory: string;
}

const Categories = ({ currentCategory }: Props) => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();

  return (
    <CategoriesGroup>
      <CategoryItem $isActive>
        Все
      </CategoryItem>
      {!isLoading && categories ?
        categories.map((category, idx) => (
          <CategoryItem
            key={`${category}-${idx}`}
            $isActive={currentCategory === category}
          >
            {showTextByCategory(category)}
          </CategoryItem>
        )) :
        <p>Loading...</p>}
    </CategoriesGroup>
  )
}

export default Categories