import React from 'react';

import styled from '@emotion/styled';

import iris from './eye/iris.svg';
import pupil from './eye/pupil.svg';
import sclera from './eye/sclera.svg';

const EYE_HEIGHT = 200;
const EYE_WIDTH = 286;
const X_BOUNDARY = EYE_HEIGHT / 2.2;
const Y_BOUNDARY = EYE_HEIGHT / 4.2;

const StalkerWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Sclera = styled.img`
  position: relative;
  height: ${EYE_HEIGHT}px;
  width: ${EYE_WIDTH}px;
  z-index: 5;
`;

const Iris = styled.img<{ x: number; y: number }>`
  height: ${EYE_HEIGHT}px;
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;

  transition: 0.1s;
`;

const Pupil = styled.img<{ x: number; y: number }>`
  height: ${EYE_HEIGHT}px;
  position: absolute;
  left: ${({ x }) => x}px;
  top: ${({ y }) => y}px;

  transition: 0.1s;
`;

type StalkerProps = {
  lookAt: { x: number | null; y: number | null };
};

export const Stalker = ({ lookAt }: StalkerProps) => {
  const screenBoundary = { x: window.innerWidth, y: window.innerHeight };
  const eyeRef = React.useRef<HTMLDivElement | null>(null);

  const getXAxis = () => {
    if (!lookAt.x) return 0;
    if (!eyeRef.current) return 0;

    const wrapperPosition =
      eyeRef.current.getBoundingClientRect().x + window.pageXOffset;

    const result =
      (lookAt.x - wrapperPosition - EYE_WIDTH / 2) /
      (screenBoundary.x / EYE_HEIGHT);
    if (result > X_BOUNDARY) return X_BOUNDARY;
    if (result < -X_BOUNDARY) return -X_BOUNDARY;
    return result;
  };

  const getYAxis = () => {
    if (!lookAt.y) return 0;
    if (!eyeRef.current) return 0;

    const wrapperPosition =
      eyeRef.current.getBoundingClientRect().y + window.pageYOffset;

    const result =
      (lookAt.y - wrapperPosition - EYE_HEIGHT / 2) /
      (screenBoundary.y / EYE_HEIGHT);
    if (result > Y_BOUNDARY) return Y_BOUNDARY;
    if (result < -Y_BOUNDARY) return -Y_BOUNDARY;
    return result;
  };

  return (
    <StalkerWrapper ref={eyeRef}>
      <Sclera src={sclera} />
      <Iris src={iris} x={getXAxis()} y={getYAxis()} />
      <Pupil
        src={pupil}
        x={getXAxis() + getXAxis() / 5}
        y={getYAxis() + getYAxis() / 4}
      />
    </StalkerWrapper>
  );
};
