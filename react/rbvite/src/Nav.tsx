import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul className='flex justify-around bg-slate-600 text-white h-10 font-bold'>
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
          <NavLink to='/items'>Items</NavLink>
        </li>
        <li>
          <NavLink to='/hello'>Hello</NavLink>
        </li>
      </ul>
    </nav>
  );
};
