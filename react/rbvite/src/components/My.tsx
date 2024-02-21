import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useContext,
  useRef,
  useState,
} from 'react';
import { Cart } from '../contexts/session-context';
import { Login, LoginHandler } from './Login';
import { Profile } from './Profile';
import { useImperativeHandle } from 'react';
import { useCounter } from '../contexts/counter-context';
import { useSession } from '../contexts/session-context';

export type ItemHandler = {
  signOut: () => void;
  notify: (msg: string) => void;
  removeItem: () => void;
  loginHandler: Partial<LoginHandler>;
};
const My = forwardRef((_, ref: ForwardedRef<ItemHandler>) => {
  const {
    session: { loginUser, cart },
    removeItem,
    saveItem,
  } = useSession();
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);
  const logoutBtnRef = useRef<HTMLButtonElement>(null);
  // const itemIdRef = useRef(0);
  const { count } = useCounter();
  const [currId, setCurrId] = useState(0);
  const loginHandlerRef = useRef<LoginHandler>(null);
  const [message, setMessage] = useState('');
  const myHandlerRef: ItemHandler = {
    signOut: () => logoutBtnRef.current?.click(),
    notify: (msg: string) => setMessage(msg),
    removeItem: () => {
      const { id } = cart.find((_, idx) => idx === 1)!;
      removeItem(id);
    },
    loginHandler: {
      noti: (msg: string) => loginHandlerRef.current?.noti(msg),
      focusId: () => loginHandlerRef.current?.focusId(),
      focusName: () => loginHandlerRef.current?.focusName(),
    },
  };
  useImperativeHandle(ref, () => myHandlerRef);

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
      <h2>로그인{count}</h2>
      {loginUser ? <Profile ref={logoutBtnRef} /> : <Login />}
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
        <button type='reset'>취소</button>
        <button type='submit'>{currId ? '수정' : '추가'}</button>
      </form>
    </div>
  );
});

My.displayName = 'My';
export default My;
