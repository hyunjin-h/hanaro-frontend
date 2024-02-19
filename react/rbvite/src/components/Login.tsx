import { FormEvent, useRef, useState } from 'react';
type Props = {
  login: (id: number, name: string) => void;
};

export const Login = ({ login }: Props) => {
  // const [id, setId] = useState(0);
  const idRef = useRef<HTMLInputElement | null>(null);
  // const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement | null>(null);
  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //submit 기본 기능 무력화!
    // console.log(`makeLogin#${idRef.current?.value}#`);
    if (!idRef.current || !idRef.current.value) {
      //if(!idRef.current?value)
      alert('입력핫요');
      idRef.current?.focus();
      return;
    } else if (!nameRef.current?.value) {
      alert('유저네임입력하세요');
      nameRef.current?.focus();
      return;
    }
    const id = idRef.current.value;
    const name = nameRef.current.value;
    login(+id, name);
  };
  return (
    <>
      <form onSubmit={makeLogin}>
        <div>
          <span>LoginID:</span>
          <input type='number' ref={idRef} />
        </div>
        {/* <div>
          LoginID:
          <input type='text' onChange={(e) => setId(+e.currentTarget.value)} />
        </div> */}
        <div>
          LoginName:
          <input type='text' ref={nameRef} />
          {/* <input type='text' onChange={(e) => setName(e.currentTarget.value)} /> */}
        </div>
        <button type='submit'>Sign-in</button>
      </form>
    </>
  );
};
