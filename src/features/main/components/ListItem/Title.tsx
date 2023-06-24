import bag from '../../../../assets/bag.png';
import { TitleGroup, TitleLogoWrapper, TitleText } from './styles';

const Title = () => {
  return (
    <TitleGroup>
      <TitleLogoWrapper>
        <img src={bag} alt="bag-logo" />
      </TitleLogoWrapper>

      <TitleText>НОВОЕ ПОСТУПЛЕНИЕ</TitleText>
    </TitleGroup>
  );
};

export default Title;
