import React from 'react'
import { HeaderWrapper, HeaderTitle } from './styles'

const Header = () => {
  const list = ['ИНФОРМАЦИЯ О ПРОДУКТЕ', 'ЦЕНА', 'КОЛИЧЕСТВО', 'ОБЩЕЕ'];

  return (
    <HeaderWrapper>
      {list.map((item, idx) => <HeaderTitle key={`${item}-${idx}`}>{item}</HeaderTitle>)}
    </HeaderWrapper>
  )
}

export default Header