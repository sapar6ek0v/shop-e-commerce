import { LoaderWrapper, Line } from './styles';

interface Props {
  isCentered?: boolean;
}

const Loader = ({ isCentered = false }: Props) => {
  return (
    <LoaderWrapper $isCentered={isCentered}>
      <Line>
        <Line>
          <Line>
            <Line>
              <Line>
                <Line>
                  <Line />
                </Line>
              </Line>
            </Line>
          </Line>
        </Line>
      </Line>
    </LoaderWrapper>
  );
};

export default Loader;
