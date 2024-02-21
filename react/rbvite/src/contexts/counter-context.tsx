import { PropsWithChildren, createContext, useContext, useState } from 'react';
type CounterContextProps = {
  count: number;
  plusCount: () => void;
};

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  plusCount: () => {},
});

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  // const plusCount = () => setCount(count + 1);
  const plusCount = () => setCount((prevCount) => prevCount + 1);
  return (
    <>
      <CounterContext.Provider value={{ count, plusCount }}>
        {children}
      </CounterContext.Provider>
    </>
  );
};
export const useCounter = () => useContext(CounterContext);
