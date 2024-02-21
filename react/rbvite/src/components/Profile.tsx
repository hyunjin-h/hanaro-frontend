import { useSession } from '../contexts/session-context';
import { Ref, forwardRef } from 'react';

export const Profile = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  const {
    session: { loginUser },
    logout,
  } = useSession();
  return (
    <>
      <h3>이름: {loginUser?.name}</h3>
      <button ref={ref} onClick={logout}>
        Sign-out
      </button>
    </>
  );
});
Profile.displayName = 'Profile';
