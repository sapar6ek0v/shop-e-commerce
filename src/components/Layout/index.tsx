import { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import { useAppSelector } from '../../lib/useAppSelector';
import GlobalStyles from '../../styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import { ContentWrapper } from './styles';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { isLoggedIn } = useAppSelector((store) => store.auth);

  return (
    <ThemeProvider theme={theme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "'Montserrat', sans-serif",
          breakpoints: {
            xs: '30em',
            sm: '48em',
            md: '64em',
            lg: '74em',
            xl: '90em',
          },
        }}
      >
        <GlobalStyles />
        {isLoggedIn && <Header />}
        <ContentWrapper>{children}</ContentWrapper>
        {isLoggedIn && <Footer />}
      </MantineProvider>
    </ThemeProvider>
  );
};

export default Layout;
