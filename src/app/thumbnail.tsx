import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Thumbnail = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [thumbnail, setThumbnail] = useState(
    ref.current ? ref.current.clientWidth : 0
  );

  useEffect(() => {
    window.addEventListener('resize', () => {
      setThumbnail(ref.current ? ref.current.clientWidth : 0);
    });
  }, []);

  return (
    <Thumbail width={thumbnail} ref={ref}>
      {children}
    </Thumbail>
  );
};

const Thumbail = styled.div<{ width: number }>`
  height: calc(100vw * 1.4);
  background: gray;
`;

export default Thumbnail;
