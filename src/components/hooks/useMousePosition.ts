import { DependencyList } from 'react';

import { useLayoutEvent } from './utils/layoutHook';

export function useMousePosition(
  effect: (position: { x: number; y: number }) => void,
  wait?: number,
  dependencies?: DependencyList
) {
  const callback = (event: Event) => {
    const mouseEvent = event as MouseEvent;
    effect({ x: mouseEvent.pageX, y: mouseEvent.pageY });
  };

  useLayoutEvent({
    effect: callback,
    layoutEvent: 'mousemove',
    wait,
    dependencies,
  });
}
