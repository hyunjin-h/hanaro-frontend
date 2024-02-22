import { useEffect } from 'react';

export const useTimeout = (
  cb: (...args: unknown[]) => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  useEffect(() => {
    const tmout = setTimeout(cb, delay);
    return () => clearTimeout(tmout);
  }, dependencies);
  const reset = () => {};
  const clear = () => {};

  return { reset, clear };
};
