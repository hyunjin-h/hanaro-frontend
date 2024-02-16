import { useState } from 'react';
import Hello from './components/Hello';
import My from './components/My';
import './App.css';

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  console.log('@@@App');

  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => setCount((prevCount) => prevCount + 1);
  const login = () => {};
  const logout = () => {
    // setSession({ cart: [...session.cart], loginUser: null });
    setSession({ ...session, loginUser: null });
    //setSession.loginUser=null은 안됨!! virtualDOM이 몰라 주소값이 안바껴서
  };

  return (
    <>
      <h2>count: {count}</h2>
      <My session={session} login={login} logout={logout} />
      <Hello name={session.loginUser?.name} age={count} plusCount={plusCount}>
        <h3>반갑습니다~</h3>
      </Hello>
    </>
  );
}

export default App;