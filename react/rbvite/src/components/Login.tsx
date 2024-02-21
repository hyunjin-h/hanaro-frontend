import {
  FormEvent,
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useSession } from '../contexts/session-context';

export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};

export const Login = forwardRef((_, ref: ForwardedRef<LoginHandler>) => {
  const { login } = useSession();
  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handler = {
    noti: (msg: string) => alert(msg),
    focusId: () => idRef.current?.focus(),
    focusName: () => nameRef.current?.focus(),
  };

  useImperativeHandle(ref, () => handler);

  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit 기본 기능을 무력화!
    // console.log(`makeLogin#${idRef.current?.value}#`);

    // if (!idRef.current?.value) {
    // if (!idRef.current || !idRef.current.value) {
    //   alert('User ID를 입력하세요!');
    //   idRef.current?.focus();
    //   return;
    // } else if (!nameRef.current?.value) {
    //   alert('User name을 입력하세요!');
    //   nameRef.current?.focus();
    //   return;
    // }

    const id = Number(idRef.current?.value);
    console.log('🚀  id:', id);
    const name = nameRef.current?.value;
    console.log('🚀  name:', name);
    login(id, name ?? '');
  };

  useEffect(() => {
    // alert('Please login....');
    // return () => alert('logined');
  }, []);

  return (
    <>
      <form onSubmit={makeLogin}>
        <div>
          <span style={{ marginRight: '1em' }}>LoginID:</span>
          <input type='number' ref={idRef} />
        </div>
        <div>
          LoginName:
          {/* <input type='text' onChange={(e) => setName(e.currentTarget.value)} /> */}
          <input type='text' ref={nameRef} />
        </div>
        <button type='submit'>Sign-in</button>
      </form>
    </>
  );
});
Login.displayName = 'Login';
