import styled from 'styled-components';

export const ShowDetailContainer = styled.article`
  position: relative;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ShowDetailContainerBackground = styled.div<{ img: string | null }>`
  position: absolute;
  left: 0;
  top: -20px;
  width: 100%;
  height: 100%;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(30px);
  opacity: 0.6;
  z-index: -1;
  transform: scale(1.2);
`;

export const ShowDetailInner = styled.div`
  > div {
    display: grid;

    grid-template:
      'top top top top'
      '. bottom bottom .' / 20px 1fr 1fr 20px;

    @media (min-width: 768px) {
      grid-template: unset;
      grid-template-columns: 1fr minmax(auto, 900px) minmax(auto, 300px) 1fr;
      width: 100vw;
      grid-gap: 1rem;
    }
  }

  .description {
    grid-area: bottom;

    a {
      color: white;
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }

    @media (min-width: 768px) {
      grid-area: unset;
      grid-column: 2/3;
    }

    h2 {
      font-size: 2em;
      margin-bottom: 0;

      @media (min-width: 768px) {
        font-size: 3em;
      }
    }

    .content {
      line-height: 1.4em;
      font-size: 1.1em;
      display: grid;
      grid-template-columns: minmax(auto, 60ch);
    }
  }

  .image {
    grid-area: top;
    height: 15rem;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      border-radius: 10px;
      box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media (min-width: 768px) {
      grid-area: unset;
      grid-column: 3/4;
      height: auto;
      overflow: unset;

      img {
        position: initial;
        top: unset;
        left: unset;
        transform: unset;
      }
    }
  }
`;
