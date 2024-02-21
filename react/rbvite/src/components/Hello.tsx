import { useCounter } from '../contexts/counter-context';
import { useSession } from '../contexts/session-context';

type Props = {
  children: React.ReactNode;
};
// 첫번째 방식
// const Hello = ({
//   name,
//   age,
//   plusCount,
//   children,
// }: PropsWithChildren<Props>) => {

//두번째 방식
// const Hello: React.FC<Props> = ({ name, age, plusCount, children }) => {
//세번째 방식
const Hello = ({ children }: Props) => {
  const { session } = useSession();
  const name = session.loginUser?.name || 'Guest';

  const { count: age, plusCount } = useCounter();
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>
      <div>{children}</div>
    </div>
  );
};

export default Hello;
