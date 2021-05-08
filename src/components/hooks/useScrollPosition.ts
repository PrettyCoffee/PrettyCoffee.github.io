import { DependencyList } from 'react';

import { useLayoutEvent } from './utils/layoutHook';

export function useScrollPosition(
  effect: (position: number) => void,
  wait?: number,
  dependencies?: DependencyList
) {
  const callback = () => {
    //console.log(window.scrollY);
    effect(window.scrollY);
  };

  useLayoutEvent({
    effect: callback,
    layoutEvent: 'scroll',
    wait,
    dependencies,
  });
}
