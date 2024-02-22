import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
type CounterContextProps = {
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  // const plusMinusCount = (flag: 1 | -1) => setCount(pre => pre + flag);

  // const plusCount = () => setCount(count + 1);
  const plusCount = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );
  const minusCount = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );

  return (
    <>
      <CounterContext.Provider
        value={{
          count,
          plusCount,
          minusCount,
        }}
      >
        {children}
      </CounterContext.Provider>
    </>
  );
};
export const useCounter = () => useContext(CounterContext);
