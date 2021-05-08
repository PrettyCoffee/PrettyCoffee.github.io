import { DependencyList, useLayoutEffect } from 'react';

type UseLayoutEventArgs = {
  effect: (event: Event) => void;
  layoutEvent: string;
  wait?: number;
  dependencies?: DependencyList;
};

export const useLayoutEvent = ({
  effect,
  layoutEvent,
  wait = 500,
  dependencies,
}: UseLayoutEventArgs) => {
  let timeout: NodeJS.Timeout | null = null;

  useLayoutEffect(() => {
    const handleEvent: EventListenerOrEventListenerObject = (event) => {
      if (timeout === null) {
        timeout = setTimeout(() => effect(event), wait);
      }
    };

    window.addEventListener(layoutEvent, handleEvent);
    return () => window.removeEventListener(layoutEvent, handleEvent);
  }, dependencies);
};
