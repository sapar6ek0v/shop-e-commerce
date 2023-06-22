import React, { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';

interface Props {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "'Roboto', sans-serif",
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
        {children}
      </MantineProvider>
    </ThemeProvider>
  );
};

export default Layout