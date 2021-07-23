import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const Layout = ({ children }: { children: React.ReactNode }) => {
  <>
    <BaseStyles />
    <div>{children}</div>
  </>;
};
