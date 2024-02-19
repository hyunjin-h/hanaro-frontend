import { ChangeEvent, useState } from 'react';

export default function Sample() {
  const [nickname, setNickname] = useState('Hong');
  const changeNinkname = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.currentTarget.value);
  return (
    <>
      <div>
        <h1>Sample</h1>
        <h5>nickname:{nickname}</h5>
        <input type='text' value={nickname} onChange={changeNinkname} />
      </div>
    </>
  );
}
