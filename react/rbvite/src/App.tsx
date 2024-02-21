import {
  ChangeEvent,
  Children,
  ForwardedRef,
  createRef,
  forwardRef,
  useRef,
  useState,
  Ref,
} from 'react';
import { ItemHandler } from './components/My';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import My from './components/My';
import { useCounter } from './contexts/counter-context';
import { SessionProvider, useSession } from './contexts/session-context';

// {ss: 'FirstComponent' }
// function H5(prop: { ss: string }) {
const H5 = forwardRef(({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
  return (
    <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
      <h5>H55555566-{ss}</h5>
      <input type='text' ref={ref} placeholder='child-input...' />
    </div>
  );
});
H5.displayName = 'H5';

function App() {
  const { count, plusCount } = useCounter();
  const { session } = useSession();
  const myHandlerRef = useRef<ItemHandler>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const childInputRef = createRef<HTMLInputElement>();

  console.log('Declare-Area!');
  return (
    <>
      <h1 ref={titleRef} style={{ color: 'white', backgroundColor: 'green' }}>
        Vite + React
      </h1>
      {/* ref={childInputRef} */}
      {/* <button onClick={() => {
        if (childInputRef.current) {
          childInputRef.current.focus();
        }
      }} */}
      <H5 ss={`First-Component ${count}`} ref={childInputRef} />
      <button
        onClick={() => {
          if (childInputRef.current) {
            childInputRef.current.value = 'XXXX';
            childInputRef.current.select();
          }
        }}
      >
        call H5 input
      </button>
      <button onClick={() => myHandlerRef.current?.signOut()}>
        App-Sign-Out
      </button>
      <button onClick={() => myHandlerRef.current?.removeItem()}>
        Remove Item
      </button>
      <SessionProvider>
        <My ref={myHandlerRef} />
        <Hello>Hello-children!!!!!!!!!!!</Hello>
      </SessionProvider>

      <div className='card'>
        <button onClick={plusCount}>count is {count}</button>
        {/* setCount(count+1) 과의 차이점 확인
        flushSync는 강제로 throttle 무마시킴 10번 rerender함 => no-batch-render */}
      </div>
      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>
    </>
  );
}

export default App;
