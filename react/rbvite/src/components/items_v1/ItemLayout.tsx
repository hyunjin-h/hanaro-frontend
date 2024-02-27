import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';

export const ItemLayout = () => {
  const {
    session: { cart },
  } = useSession();

  const [currItem, setCurrItem] = useState<Cart | null>(null);
  const navigate = useNavigate();

  const goItem = (item: Cart) => {
    setCurrItem(item);
    navigate(`/v1/items/${item.id}`);
  };
  return (
    <>
      <div className='flex flex-row'>
        <ul className='basis-1/4'>
          {cart.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  setCurrItem(item);
                  navigate(`/v1/items/${item.id}`);
                  // goItem(item);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className='border-green-700'>
          <Outlet context={{ item: currItem }} />
        </div>
      </div>
    </>
  );
};
