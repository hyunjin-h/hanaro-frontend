import {
  Ref,
  createRef,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import './App.css';
import Hello from './components/Hello';
import My, { ItemHandler } from './components/My';
import { useCounter } from './contexts/counter-context';
import { SessionProvider } from './contexts/session-context';
import { flushSync } from 'react-dom';

const H5 = forwardRef(({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
  return (
    <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
      <h5>H55555566-{ss}</h5>
      <input type='text' ref={ref} placeholder='child-input...' />
    </div>
  );
});
H5.displayName = 'H5';
type Position = { x: number; y: number };

function App() {
  const { count, plusCount } = useCounter();
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const myHandlerRef = useRef<ItemHandler>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const childInputRef = createRef<HTMLInputElement>();
  const catchPosition = ({ x, y }: Position) => {
    setPosition({ x, y });
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', catchPosition);
    return () => window.removeEventListener('mousemove', catchPosition);
  });

  console.log('Declare-Area!');
  return (
    <>
      <small>{JSON.stringify(position)}</small>
      <h1 ref={titleRef} style={{ color: 'white', backgroundColor: 'green' }}>
        Vite + React
      </h1>
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
      <button onClick={() => myHandlerRef.current?.notify('테스트메시지')}>
        Message
      </button>
      <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button>
      
      <div className='card'>
        <button onClick={()=>{
          flushSync(plusCount)
        }}>count is {count}</button>
        {/* setCount(count+1) 과의 차이점 확인
        flushSync는 강제로 throttle 무마시킴 10번 rerender함 => no-batch-render */}
      </div>
      <SessionProvider myHandlerRef={myHandlerRef}>
        <My ref={myHandlerRef} />
        <Hello>Hello-children!!!!!!!!!!!</Hello>
      </SessionProvider>

      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>
    </>
  );
}

export default App;
