import { PropsWithChildren } from 'react';

type Props = {
  name: string;
  age: number;
  plusCount: () => void;
  children: React.ReactNode;
  // children: React.ReactElement;
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
const Hello = ({ name, age, plusCount, children }: Props) => {
  age = age + 1;
  // console.log('age>>>>', age);
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
