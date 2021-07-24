import tw, { styled, theme, css } from 'twin.macro';
import ShowSearch from '../features/showSearch';

const Search = (): JSX.Element => (
  <Search.Container>
    <Search.Inner>
      <Search.Title
        css={css({ textShadow: `0px 2px 8px ${theme`colors.red.900`}` })}
      >
        SCREWFLIX
      </Search.Title>
      <ShowSearch />
    </Search.Inner>
  </Search.Container>
);

Search.Container = styled.main`
  ${tw`h-screen container mx-auto flex flex-wrap justify-center items-center`}
`;

Search.Inner = styled.section`
  ${tw`w-full`}
`;

Search.Title = styled.h1`
  ${tw`text-red-600 text-4xl md:text-6xl lg:text-8xl mb-8 text-center`}
`;

export default Search;
