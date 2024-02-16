type Props = {
  login: () => void;
};

const Login = ({ login }: Props) => {
  console.log('@@@Login');
  return (
    <>
      <form>
        <div>
          Login ID(숫자): <input type='number' />
        </div>
        <div>
          Login Name: <input type='text' />
        </div>
        <button onClick={login}>Login</button>
      </form>
    </>
  );
};
export default Login;
