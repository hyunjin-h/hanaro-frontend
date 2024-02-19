import { Update } from 'vite/types/hmrPayload.js';
import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';
import { useState } from 'react';

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
  return (
    <div
      style={{ border: '2px solid red', marginBottom: '2rem', padding: '1rem' }}
    >
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <input type='text' value='itemName' />
      <input type='text' value='itemName' />
      <input type='text' value='itemName' />
      <ul>
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
