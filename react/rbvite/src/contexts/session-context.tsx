import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { ItemHandler } from '../components/My';
import { LoginHandler } from '../components/Login';

type SessionContextProps = {
  session: Session;
  login: (id: number, name: string) => boolean;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
  totalPrice: number;
};
type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
  loginHandlerRef?: RefObject<LoginHandler>;
};

type Action =
  | { type: 'login' | 'logout'; payload: LoginUser | null }
  | { type: 'set'; payload: Session }
  | { type: 'saveItem'; payload: Cart }
  | { type: 'removeItem'; payload: number };

const SKEY = 'session';
const DefaultSession: Session = {
  loginUser: null,
  cart: [],
};

function getStorage() {
  const storedData = localStorage.getItem(SKEY);
  if (storedData) {
    return JSON.parse(storedData) as Session;
  }

  setStorage(DefaultSession);

  return DefaultSession;
}

function setStorage(session: Session) {
  localStorage.setItem(SKEY, JSON.stringify(session));
}
const SessionContext = createContext<SessionContextProps>({
  session: { loginUser: null, cart: [] },
  login: () => false,
  logout: () => {},
  removeItem: () => {},
  saveItem: () => {},
  totalPrice: 0,
});

// type Action = {
//   type: 'set' | 'login' | 'logout' | 'saveItem' | 'removeItem';
//   payload: Session | LoginUser | Cart | number;
// }; ->이러면 as Type을 써야해서 좀 그럼

// TODO: login, logout,saveItem, removeItem 등 useReducer를 활용하여 합쳐보자!!!
const reducer = (session: Session, { type, payload }: Action) => {
  let newer;
  switch (type) {
    case 'set':
      newer = { ...payload };
      break;

    case 'login':
    case 'logout':
      newer = { ...session, loginUser: payload };
      break;
    case 'saveItem':
      {
        const { id, name, price } = payload;
        const { cart } = session;
        const foundItem = id !== 0 && cart.find((item) => item.id === id);
        if (!foundItem) {
          const maxId = Math.max(...session.cart.map((item) => item.id), 0);
          // cart.push({ id: maxId + 1, name, price }); //Bug!! StrictMode
          newer = {
            ...session,
            cart: [...cart, { id: maxId + 1, name, price }],
          }; //새로 메모리 주소 만들어서(?)...
        } else {
          foundItem.name = name;
          foundItem.price = price;
          newer = { ...session };
        }
      }
      break;

    case 'removeItem':
      newer = {
        ...session,
        cart: session.cart.filter((item) => item.id !== payload),
      };
      break;

    default:
      return session;
  }
  setStorage(newer);
  return newer;
};

export const SessionProvider = ({
  children,
  myHandlerRef,
  loginHandlerRef,
}: ProviderProps) => {
  const [session, dispatch] = useReducer(
    reducer,
    getStorage() || DefaultSession
  );

  const totalPrice = useMemo(
    () => session.cart.reduce((acc, obj) => acc + obj.price, 0),
    [session]
  );

  const login = useCallback((id: number, name: string) => {
    const loginNoti =
      myHandlerRef?.current?.loginHandler.noti ||
      loginHandlerRef?.current?.noti ||
      alert;
    console.log('🚀  loginNoti:', loginNoti, id, name);

    const focusId =
      myHandlerRef?.current?.loginHandler.focusId ||
      loginHandlerRef?.current?.focusId;
    const focusName =
      myHandlerRef?.current?.loginHandler.focusName ||
      loginHandlerRef?.current?.focusName;

    if (!id || isNaN(id)) {
      loginNoti('User id을 입력하세요!');
      if (focusId) focusId();
      return false;
    }

    if (!name) {
      loginNoti('User name을 입력하세요!');
      if (focusName) focusName();
      return false;
    }

    dispatch({ type: 'login', payload: { id, name } });
    // setSession({ ...session, loginUser: { id, name } });

    return true;
  }, []);

  const logout = useCallback(() => {
    // setSession({ ...session, loginUser: null });

    dispatch({ type: 'logout', payload: null });
  }, []);

  const removeItem = useCallback((itemId: number) => {
    // setSession({
    //   ...session,
    //   // cart: [...session.cart.filter((item) => item.id !== itemId)], // 더 순수함수에 가깝게 보임
    //   cart: session.cart.filter((item) => item.id !== itemId),
    // });
    dispatch({ type: 'removeItem', payload: itemId });
    // VirtualDOM의 rerender가 호출 안함(:session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  }, []);

  const saveItem = useCallback(({ id, name, price }: Cart) => {
    dispatch({ type: 'saveItem', payload: { id, name, price } });
    // setSession({
    //   ...session,
    //   cart: [...cart],
    // });
  }, []); //session을 사용하는 로직을 dispatch에 넣자 , login은 session 변경(?) 안해서

  // const { data, error } = useFetch<Session>({
  //   url: '/data/sample.json',
  // });

  // useEffect(() => {
  //   if (data) {
  //     dispatch({ type: 'set', payload: data });
  //   }
  // }, [data]);

  useEffect(() => {
    dispatch({ type: 'set', payload: getStorage() });
  }, []);

  return (
    <>
      <SessionContext.Provider
        value={{ session, login, logout, removeItem, saveItem, totalPrice }}
      >
        {children}
      </SessionContext.Provider>
    </>
  );
};
export const useSession = () => useContext(SessionContext);
