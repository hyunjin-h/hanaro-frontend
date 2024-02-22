import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ItemHandler } from '../components/My';


type SessionContextProps = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
};
const SessionContext = createContext<SessionContextProps>({
  session: { loginUser: null, cart: [] },
  login: () => {},
  logout: () => {},
  removeItem: () => {},
  saveItem: () => {},
});
type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
};

export const SessionProvider = ({ children, myHandlerRef }: ProviderProps) => {
  const [session, setSession] = useState<Session>({
    loginUser: null,
    cart: [],
  });

  const login = useCallback(
    (id: number, name: string) => {
      const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;
      console.log('🚀  loginNoti:', loginNoti, id, name);

      const focusId = myHandlerRef?.current?.loginHandler.focusId;
      const focusName = myHandlerRef?.current?.loginHandler.focusName;

      if (!id || isNaN(id)) {
        loginNoti('User id을 입력하세요!');
        if (focusId) focusId();
        return;
      }

      if (!name) {
        loginNoti('User name을 입력하세요!');
        if (focusName) focusName();
        return;
      }
      setSession({ ...session, loginUser: { id, name } });
    },
    [myHandlerRef]
  );

  const logout = useCallback(() => {
    setSession({ ...session, loginUser: null });
  }, []);

  const removeItem = useCallback((itemId?: number) => {
    setSession({
      ...session,
      // cart: [...session.cart.filter((item) => item.id !== itemId)], // 더 순수함수에 가깝게 보임
      cart: session.cart.filter((item) => item.id !== itemId),
    });
    // VirtualDOM의 rerender가 호출 안함(:session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  }, []);

  const saveItem = useCallback(({ id, name, price }: Cart) => {
    const { cart } = session;
    const foundItem = id !== 0 && cart.find((item) => item.id === id);
    if (!foundItem) {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push({ id, name, price });
    } else {
      foundItem.name = name;
      foundItem.price = price;
    }
    setSession({
      ...session,
      // cart: [...cart],
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async function () {
      const res = await fetch('/data/sample.json', {
        signal,
      });
      const data = await res.json();
      setSession(data);
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <SessionContext.Provider
        value={{ session, login, logout, removeItem, saveItem }}
      >
        {children}
      </SessionContext.Provider>
    </>
  );
};
export const useSession = () => useContext(SessionContext);
