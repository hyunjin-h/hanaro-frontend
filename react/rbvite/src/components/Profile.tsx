import { LoginUser } from '../App';
import { Ref, forwardRef } from 'react';

type Props = {
  loginUser: LoginUser;
  logout: () => void;
};

export const Profile = forwardRef(
  ({ loginUser, logout }: Props, ref: Ref<HTMLButtonElement>) => {
    return (
      <>
        <h3>이름: {loginUser.name}</h3>
        <button ref={ref} onClick={logout}>
          Sign-out
        </button>
      </>
    );
  }
);
Profile.displayName = 'Profile';
