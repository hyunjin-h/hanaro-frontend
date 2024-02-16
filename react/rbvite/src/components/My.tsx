import { Session } from '../App';
import Login from './Login';
import Profile from './Profile';

type Props = {
  session: Session;
  login: () => void;
  logout: () => void;
};

const My = ({ session: { loginUser, cart }, login, logout }: Props) => {
  console.log('@@@My');
  return (
    <>
      <div>
        {loginUser ? (
          <Profile loginUser={loginUser} logout={logout} />
        ) : (
          <Login login={login} />
        )}
        <h3>장바구니</h3>
        <ul>
          {cart.map(({ id, name, price }) => (
            <li key={id}>
              {name}({price})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default My;
