import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <header />;
  }

  return (
    <Container>
      <div>
        <Link to="/">
          <h1>SCREWFLIX</h1>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.header`
  padding: 1rem 0;
  background: black;

  @media (min-width: 768px) {
    padding: 2rem 0;
    background: transparent;
  }

  > div {
    max-width: 1200px;
    margin: 0 auto;
    a {
      text-decoration: none;
    }

    h1 {
      text-align: center;
      color: var(--color-red);
      margin: 0 auto;
    }
  }
`;

export default Header;
