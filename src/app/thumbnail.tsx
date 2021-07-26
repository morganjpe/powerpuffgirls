import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
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

  useLayoutEffect(() => {
    setThumbnail(ref.current ? ref.current.clientWidth : 0);
  }, []);

  return (
    <Thumbail width={thumbnail} ref={ref}>
      {children}
    </Thumbail>
  );
};

const Thumbail = styled.div<{ width: number }>`
  height: calc(${({ width }) => width}px * 1.4);
  background: var(--color-gray);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Thumbnail;
