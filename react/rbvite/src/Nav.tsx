import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const Nav = () => (
  <nav>
    <ul className='flex justify-around mt-3 mb-7 bg-slate-600 text-white h-10 place-items-center font-bold'>
      <li>
        <NavLink to='/' replace>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/login'>Login</NavLink>
      </li>
      <li>
        <NavLink to='/my'>My</NavLink>
      </li>
      <li>
        <NavLink
          to='/posts'
          style={({ isActive, isPending }) => {
            console.log({ isActive, isPending });
            return { color: isActive ? 'blue' : 'inherit' };
          }}
        >
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/hello'
          className={({ isActive, isPending, isTransitioning }) =>
            clsx({
              'text-red-500': isActive,
              'border border-red-500': isPending || isTransitioning,
            })
          }
        >
          Hello
        </NavLink>
      </li>
      <li>
        <NavLink to='/samplexxxx'>Sample</NavLink>
      </li>
      <li>
        <NavLink
          to='/difertrans'
          className={({ isActive, isPending, isTransitioning }) =>
            clsx({
              'text-red-500': isActive,
              'border border-red-500': isPending || isTransitioning,
            })
          }
        >
          DeferTrans
        </NavLink>
      </li>
    </ul>
  </nav>
);
