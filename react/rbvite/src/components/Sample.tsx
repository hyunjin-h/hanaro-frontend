import { ChangeEvent, useRef, useState } from 'react';

const CITIES = ['서울', '대구', '경기', '부산'];

export default function Sample() {
  const [nickname, setNickname] = useState('Hong');
  const [address, setAddress] = useState('address');
  const [age, setAge] = useState(0);
  const nameChangeCnt = useRef(0);

  const changeNinkname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    nameChangeCnt.current += 1;
  };

  return (
    <>
      <div style={{ alignItems: 'center' }}>
        <h1>Hooks Sample</h1>
        <h5>
          info: {nickname} ({age}세) - {address}
        </h5>
        <div>
          <input type='text' value={nickname} onChange={changeNinkname} />
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(+e.currentTarget.value)} //valueAsNumber
          />

          <input
            type='text'
            value={address}
            onChange={(e) => setAddress(e.currentTarget.value)}
          />

          <select
            style={{
              width: '300px',
              height: '30px',
              display: 'flex',
              margin: 'auto',
            }}
            value={address}
            onChange={(e) => setAddress(e.currentTarget.value)}
          >
            {CITIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button
            onClick={() => {
              alert(nameChangeCnt.current);
              nameChangeCnt.current = 0;
            }}
          >
            횟수출력
          </button>
        </div>
      </div>
    </>
  );
}
