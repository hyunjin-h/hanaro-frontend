import { useEffect, useRef, useState } from 'react';

export default function Effect() {
  // const [isShow, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const hRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (!hRef.current) return;

    if (count > 20) return;
    const pos = hRef.current.getBoundingClientRect();
    console.log('🚀 ~ useEffect ~ pos:', pos);

    hRef.current.style.top = `${pos.bottom + count * 0.1}px`;
    setCount((p) => p + 1);
  }, [count]);
  return (
    <div style={{ marginBottom: '20rem' }}>
      <button onClick={() => setCount(count !== 0 ? 0 : 1)}>ShowEffect</button>
      {count && <h3 style={{ position: 'absolute' }}>Article!!!!!</h3>}
    </div>
  );
}
