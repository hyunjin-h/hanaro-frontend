import { useRef, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Hello from './components/Hello';
import { My } from './components/My';

// {ss: 'FirstComponent' }
// function H5(prop: { ss: string }) {
// function H5({ ss }: { ss: string }) {
//   return <h5>H55555566-{ss}</h5>;
// }

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession: Session = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);
  // const itemName = useRef('');

  const titleRef = useRef<HTMLHeadingElement>(null);
  // const plusCount = () => setCount(count + 1);
  const plusCount = () => setCount((prevCount) => prevCount + 1);
  const login = (id: number, name: string) => {
    setSession({ ...session, loginUser: { id, name } });
  };
  const logout = () => {
    // setSession({ cart: [...session.cart], loginUser: null });
    // session.loginUser = null;
    setSession({ ...session, loginUser: null });
  };
  const removeItem = (itemId: number) => {
    setSession({
      ...session,
      // cart: [...session.cart.filter((item) => item.id !== itemId)], // 더 순수함수에 가깝게 보임
      cart: session.cart.filter((item) => item.id !== itemId),
    });

    // VirtualDOM의 rerender가 호출 안함(:session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  };
  // const addCartItem = (itemName: string, itemPrice: number) => {
  //   setSession({ ...session, cart: [...session.cart,{id:100,name:itemName,price:}] });
  // };
  console.log('Declare-Area!');
  return (
    <>
      <h1 ref={titleRef} style={{ color: 'white', backgroundColor: 'red' }}>
        Vite + React
      </h1>
      {/* <H5 ss={`First-Component ${count}`} /> */}
      <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
        // addCartItem={addCartItem}
      />
      <Hello
        name={session.loginUser?.name || 'Guest'}
        age={count}
        plusCount={plusCount}
      >
        Hello-children!!!!!!!!!!!
      </Hello>
      <div className='card'>
        <button
          onClick={() => {
            // setCount(count+1) 과의 차이점 확인
            // flushSync는 강제로 throttle 무마시킴 10번 rerender함 => no-batch-render
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
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
