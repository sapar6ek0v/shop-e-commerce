import { HeaderWrapper, HeaderTitle } from './styles';

const Header = () => {
  const list = ['ИНФОРМАЦИЯ О ПРОДУКТЕ', 'ЦЕНА', 'КОЛИЧЕСТВО', 'ОБЩЕЕ'];

  return (
    <HeaderWrapper>
      {list.map((item) => (
        <HeaderTitle key={item}>{item}</HeaderTitle>
      ))}
    </HeaderWrapper>
  );
};

export default Header;
