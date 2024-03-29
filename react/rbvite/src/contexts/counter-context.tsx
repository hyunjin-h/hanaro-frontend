import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
type CounterContextProps = {
  count: number;
  plusCount: () => void;
  minusCount: (payload?: number) => void;
};
type ReducerAction = {
  type: string;
  payload?: number;
};

const CounterContext = createContext<CounterContextProps>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

const reducer = (count: number, { type, payload = 1 }: ReducerAction) => {
  // console.log('🚀  payload:', payload);
  switch (type) {
    case 'plus':
      return count + payload;
    case 'minus':
      return count - payload;
    default:
      return count;
  }
};

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, dispatch] = useReducer(reducer, 0);
  const plusCount = () => dispatch({ type: 'plus' });
  const minusCount = (payload: number = 1) =>
    dispatch({ type: 'minus', payload });

  // const plusMinusCount = (flag: 1 | -1) => setCount(pre => pre + flag);

  // const plusCount = () => setCount(count + 1);
  // const plusCount = useCallback(
  //   () => setCount((prevCount) => prevCount + 1),
  //   []
  // );
  // const minusCount = useCallback(
  //   () => setCount((prevCount) => prevCount - 1),
  //   []
  // );

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
