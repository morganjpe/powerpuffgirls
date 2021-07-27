import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const CustomStyles = createGlobalStyle`
    html {
        --color-red: #E50914;
        --color-black: black;
        --color-white: white;
        --color-gray: #221f1f;

        --font-roboto: 'Roboto', sans-serif;
        --font-bebas: 'Bebas Neue', cursive;
    }

    body {
        font-family: var(--font-roboto);
        background: var(--color-black);
        color: var(--color-white);   
        overflow-x: hidden;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: var(--font-bebas);
    }

`;

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <>
      <Normalize />
      <CustomStyles />
      {children}
    </>
  );
};

export default Layout;
