import { Update } from 'vite/types/hmrPayload.js';
import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';
// import { useState } from 'react';
import { ChangeEvent } from 'react';
import { useRef } from 'react';
import { FormEvent } from 'react';
type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  addCartItem: (itemName: string, itemPrice: number) => void;
};

export const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
  addCartItem,
}: Props) => {
  // if (loginUser) loginUser.name = 'XXXXXXX';
  // removeItem = (itemId: number) => {
  //   const updatedCart = cart.filter((item) => item.id !== itemId);
  // };
  const itemNameRef = useRef<HTMLInputElement | null>(null);
  const itemPriceRef = useRef<HTMLInputElement | null>(null);
  const plusItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //submit 기본 기능 무력화!
    if (!itemNameRef.current || !itemNameRef.current.value) {
      alert('item이름 입력');
      itemNameRef.current?.focus();
      return;
    } else if (!itemPriceRef.current?.value) {
      alert('item 가격 입력');
      itemPriceRef.current?.focus();
      return;
    }
    const name = itemNameRef.current.value;
    const price = +itemPriceRef.current.value;
    addCartItem(name, price);
  };
  return (
    <div
      style={{
        border: '2px solid green',
        marginBottom: '2rem',
        padding: '1rem',
      }}
    >
      <h2>로그인</h2>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <h2>상품</h2>
      <form onSubmit={plusItem}>
        <div>
          상품명:
          <input ref={itemNameRef} type='text' />
        </div>
        <div>
          가격:
          <input ref={itemPriceRef} type='text' />
        </div>
        <button type='submit'>상품추가</button>
      </form>
      <ul style={{ listStyle: 'none' }}>
        {cart.map(({ id, name, price }: Cart) => (
          <li key={id}>
            <small>{id}. </small>
            {name} ({price.toLocaleString()}원)
            <button
              title='removeItem'
              onClick={() => {
                removeItem(id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
