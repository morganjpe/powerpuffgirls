import styled from 'styled-components';
import ShowSearch from '../features/showSearch';

const Search = (): JSX.Element => {
  return (
    <Container>
      <Inner>
        <TitleContainer>
          <div>
            <Title>SCREWFLIX</Title>
          </div>
        </TitleContainer>
        <ShowSearch />
      </Inner>
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template:
    'top' 1fr
    'middle' 3fr;
`;

const Inner = styled.section`
  grid-area: middle;
`;

const TitleContainer = styled.div`
  display: grid;

  grid-template-columns: 20px 1fr 20px;

  div {
    grid-column: 2 / 3;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2fr 1fr;
  }
`;

const Title = styled.h1`
  color: var(--color-red);
  margin: 0;
  font-size: 3em;
  text-align: center;
  padding: 2rem 0;

  @media (min-width: 768px) {
    font-size: 5em;
  }
`;

export default Search;
