import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

const Thumbnail = ({
  children,
  ratio,
}: {
  children: React.ReactNode;
  ratio?: number;
}): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [thumbnail, setThumbnail] = useState(
    ref.current ? ref.current.clientWidth : 0
  );

  useEffect(() => {
    const listener = () =>
      setThumbnail(ref.current ? ref.current.clientWidth : 0);

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  useLayoutEffect(() => {
    setThumbnail(ref.current ? ref.current.clientWidth : 0);
  }, []);

  return (
    <Thumbail ratio={ratio || 1.4} width={thumbnail} ref={ref}>
      {children}
    </Thumbail>
  );
};

const Thumbail = styled.div<{ width: number; ratio: number }>`
  height: calc(${({ width, ratio }) => width * ratio}px);
  background: var(--color-gray);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Thumbnail;
