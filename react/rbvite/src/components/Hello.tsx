import { PropsWithChildren } from 'react';
import { useCounter } from '../contexts/counter-context';
import { useSession } from '../contexts/session-context';

type Props = {
  // name: string;
  // age: number;
  // plusCount: () => void;
  // children: React.ReactNode;
  // children: React.ReactElement;
};

// // 첫번째 방식
// // const Hello = ({
// //   name,
// //   age,
// //   plusCount,
// //   children,
// // }: PropsWithChildren<Props>) => {

// //두번째 방식
// // const Hello: React.FC<Props> = ({ name, age, plusCount, children }) => {
// //세번째 방식
const Hello = ({ children }: PropsWithChildren<Props>) => {
  const { count: age, plusCount, minusCount } = useCounter();
  const { session } = useSession();
  const name = session.loginUser?.name || 'Guest';

  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount} className='btn-primary'>
        Plus Age
      </button>
      <button onClick={() => minusCount(10)} className='btn-danger'>
        Minus Age
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Hello;
