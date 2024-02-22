import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const cbRef = useRef(cb);
  cbRef.current = cb;
  const delayRef = useRef(delay);
  delayRef.current = delay;

  const setup = useCallback(() => {
    console.log('set-up', delay, delayRef.current);
    timerRef.current = setTimeout(cbRef.current, delayRef.current);
  }, []);

  const clear = useCallback(() => {
    console.log('clear');
    clearTimeout(timerRef.current);
  }, []);

  const reset = useCallback(() => {
    console.log('reset');
    clear();
    setup();
  }, [setup, clear]);

  useEffect(() => {
    setup();
    return clear;
  }, dependencies);

  return { reset, clear };
};
