import React from 'react'
import SEO from '../../components/SEO'
import { Paths } from '../../config/paths'
import Stepper from './components/Stepper'

const Order = () => {
  return (
    <>
      <SEO
        title="Заказ"
        description="Страница заказа"
        keywords=""
        name=""
        type=""
        href={Paths.ORDER}
      />
      <Stepper />
    </>
  )
}

export default Order