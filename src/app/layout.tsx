import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles, theme } from 'twin.macro';

const CustomStyles = createGlobalStyle`
    body {
        background-color: ${theme`colors.black`};
        color: ${theme`colors.white`};
        font-family: 'Roboto', sans-serif;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Bebas Neue', cursive;
    }
`;

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <BaseStyles />
      <CustomStyles />
      {children}
    </>
  );
};

export default Layout;
