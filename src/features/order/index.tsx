import SEO from '../../components/SEO';
import { Paths } from '../../config/paths';
import Stepper from './components/Stepper';

const Order = () => {
  return (
    <>
      <SEO
        title="Оформите заказ"
        description="Оформите заказ в нашем интернет-магазине всего за 3 простых шага. На первом шаге вам потребуется заполнить информацию о себе, на втором шаге - указать данные своей банковской карты, а на третьем шаге - предоставить информацию о доставке, включая возможность указать адрес через карту."
        keywords="Оформление заказа, шаги, информация о покупателе, банковская карта, адрес, доставка, карта."
        name="shop-e-commerce"
        type="web-application"
        href={Paths.ORDER}
      />
      <Stepper />
    </>
  );
};

export default Order;
