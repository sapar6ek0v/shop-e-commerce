import React from 'react'
import SEO from '../../components/SEO'
import { Paths } from '../../config/paths'
import ListItem from './components/ListItem'

const Main = () => {
  return (
    <>
      <SEO
        title="Главная"
        description="Главная страница"
        keywords=""
        name=""
        type=""
        href={Paths.MAIN}
      />
      <ListItem />
    </>
  )
}

export default Main