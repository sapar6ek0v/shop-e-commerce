import React from 'react'

import { useGetAllCategoriesQuery } from '../../../../store/apis/products'
import { showTextByCategory } from '../../../../utils/showTextByCategory';
import { CategoriesGroup, CategoriesLoadingText, CategoryItem } from './styles'

interface Props {
  currentCategory: string;
}

const Categories = ({ currentCategory }: Props) => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();

  return (
    <CategoriesGroup>
      {!isLoading && categories ?
        <>
          <CategoryItem $isActive>
            Все
          </CategoryItem>
          {categories.map((category, idx) => (
            <CategoryItem
              key={`${category}-${idx}`}
              $isActive={currentCategory === category}
            >
              {showTextByCategory(category)}
            </CategoryItem>
          ))}
        </> :
        <CategoriesLoadingText>Загрузка...</CategoriesLoadingText>}
    </CategoriesGroup>
  )
}

export default Categories