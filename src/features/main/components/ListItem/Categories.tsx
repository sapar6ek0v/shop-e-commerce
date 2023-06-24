import { useGetAllCategoriesQuery } from '../../../../store/apis/products';
import { showTextByCategory } from '../../../../utils/showTextByCategory';
import { CategoriesGroup, CategoriesLoadingText, CategoryItem } from './styles';

interface Props {
  currentCategory: string;
}

const Categories = ({ currentCategory }: Props) => {
  const { data: categories, isLoading } = useGetAllCategoriesQuery();

  return (
    <CategoriesGroup>
      {!isLoading && categories ? (
        <>
          <CategoryItem $isActive>Все</CategoryItem>
          {categories.map((category) => (
            <CategoryItem
              key={category}
              $isActive={currentCategory === category}
            >
              {showTextByCategory(category)}
            </CategoryItem>
          ))}
        </>
      ) : (
        <CategoriesLoadingText>Загрузка...</CategoriesLoadingText>
      )}
    </CategoriesGroup>
  );
};

export default Categories;
