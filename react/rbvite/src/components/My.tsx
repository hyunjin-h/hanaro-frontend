import { FormEvent, ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Cart, Session } from '../App';
import { Login, LoginHandler } from './Login';
import { Profile } from './Profile';
type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  addCartItem: (itemName: string, itemPrice: number) => void;
  saveItem: (item: Cart) => void;
};
export type ItemHandler = {};
const My = forwardRef(
  (
    {
      session: { loginUser, cart },
      login,
      logout,
      removeItem,
      addCartItem,
      saveItem,
    }: Props,
    ref: ForwardedRef<ItemHandler>
  ) => {
    // if (loginUser) loginUser.name = 'XXXXXXX';
    // removeItem = (itemId: number) => {
    //   const updatedCart = cart.filter((item) => item.id !== itemId);
    // };
    const itemNameRef = useRef<HTMLInputElement>(null);
    const itemPriceRef = useRef<HTMLInputElement>(null);
    const logoutBtnRef = useRef<HTMLButtonElement>();
    // const itemIdRef = useRef(0);
    const [currId, setCurrId] = useState(0);

    const loginHandlerRef = useRef<LoginHandler>(null);

    const [message, setMessage] = useState('');
    const myItemControlRef: ItemHandler = {
      signOut: () => logoutBtnRef.current?.click(),
      notify: (msg: string) => setMessage(msg),

      removeItem: () => {},
      loginHandler: {},
    };

    /*

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
    */

    const saveCartItem = (e: FormEvent) => {
      e.preventDefault();
      const id = currId;
      const name = itemNameRef.current?.value;
      const price = Number(itemPriceRef.current?.value);
      if (!name) {
        alert('상품명 정확히 입력하세요');
        itemNameRef.current?.focus();
        return;
      } else if (isNaN(price) || !price) {
        alert('가격을 정확히 입력하세요');
        itemPriceRef.current?.focus();
        return;
      }

      saveItem({ id, name, price });
      // itemIdRef.current = 0;
      setCurrId(0);
      itemNameRef.current.value = '';
      if (itemPriceRef.current) {
        itemPriceRef.current.value = '0';
      }
    };

    return (
      <div
        style={{
          border: '2px solid green',
          marginBottom: '2rem',
          padding: '1rem',
        }}
      >
        {message && (
          <>
            <h3>{message}</h3>
          </>
        )}
        <h2>로그인</h2>
        {loginUser ? (
          <Profile
            loginUser={loginUser}
            logout={logout}
            ref={myItemControlRef}
          />
        ) : (
          <Login login={login} />
        )}
        <h2>장바구니</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {cart.map(({ id, name, price }: Cart) => (
            <li
              onClick={() => {
                if (itemNameRef.current && itemPriceRef.current) {
                  itemNameRef.current.value = name;
                  itemPriceRef.current.value = price.toString();
                }
                // itemIdRef.current = id;
                setCurrId(id);
              }}
              key={id}
              className={`pointer`}
            >
              <small>{id}. </small>
              {name} ({price.toLocaleString()}원)
              <button
                title='removeItem'
                onClick={() => {
                  removeItem(id);
                }}
                style={{ backgroundColor: 'skyblue' }}
              >
                X
              </button>
              <button
                title='modifiedItem'
                onClick={() => {
                  if (itemNameRef.current && itemPriceRef.current) {
                    itemNameRef.current.value = name;
                    itemPriceRef.current.value = price.toString();
                  }
                  // itemIdRef.current = id;
                  setCurrId(id);
                }}
              >
                edit
              </button>
            </li>
          ))}
        </ul>
        <h2>상품</h2>
        <form onSubmit={saveCartItem} onReset={() => setCurrId(0)}>
          {/* itemIdRef.current = 0 */}
          <div>
            상품명:
            <input ref={itemNameRef} type='text' />
          </div>
          <div>
            가격:
            <input ref={itemPriceRef} type='number' />
          </div>
          {/* @Todo <button type='submit'>{itemIdRef.current ? '수정' : '추가'}</button> */}
          <button type='reset'>취소</button>
          {/* <button type='submit'>저장</button> */}
          <button type='submit'>{currId ? '수정' : '추가'}</button>
        </form>
      </div>
    );
  }
);

My.displayName = 'My';
export default My;
