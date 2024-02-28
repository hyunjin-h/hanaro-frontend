import { Ref, forwardRef, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './Nav';
import { NotFound } from './NotFound';
import Hello from './components/Hello';
import { Home } from './components/Home';
import { Login, LoginHandler } from './components/Login';
import My, { ItemHandler } from './components/My';

import Posts from './components/Posts';
import { SessionProvider } from './contexts/session-context';
import { PostLayout } from './components/PostLayout';
import { PostDetail } from './components/PostDetail';
import { ItemLayout } from './components/items_v1/ItemLayout';
import { Item } from './components/items_v1/Item';
import { Items } from './components/items_v1/Items';

import {
  ItemLayoutV2,
  ItemsV2,
  ItemV2,
  ItemEditV2,
} from './components/items_v2/itemV2';

const H5 = forwardRef(({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
  return (
    <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
      <h5>H55555566-{ss}</h5>

      <input type='text' ref={ref} placeholder='child-input...' />
    </div>
  );
});
H5.displayName = 'H5';

function App() {
  const myHandlerRef = useRef<ItemHandler>(null);
  const loginHandlerRef = useRef<LoginHandler>(null);

  return (
    <>
      <SessionProvider myHandlerRef={myHandlerRef}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login ref={loginHandlerRef} />} />
          <Route path='/my' element={<My ref={myHandlerRef} />} />

          <Route path='/posts' element={<PostLayout />}>
            <Route index element={<Posts />} />
            <Route path=':id' element={<PostDetail />} />
          </Route>

          <Route path='/v1/items' element={<ItemLayout />}>
            <Route index element={<Items />} />
            <Route path=':id' element={<Item />} />
          </Route>

          <Route path='/v2/items' element={<ItemLayoutV2 />}>
            <Route index element={<ItemsV2 />} />
            <Route path=':id' element={<ItemV2 />} />
            <Route path=':id/edit' element={<ItemEditV2 />} />
          </Route>
          {/* <Route path='/posts/:id' element={<Posts />} /> */}
          {/* <Route path='/items' element={<Items />} />
        <Route path='/items/:id' element={<Item />} /> */}
          <Route path='/hello' element={<Hello />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </SessionProvider>

      {/* <DeferTrans /> */}

      {/* <h1 ref={titleRef} style={{ color: 'white', backgroundColor: 'green' }}>
          Vite + React
        </h1> */}
      {/* <H5 ss={`First-Component ${count}`} ref={childInputRef} /> */}
      {/* <button
          onClick={() => {
            if (childInputRef.current) {
              childInputRef.current.value = 'XXXX';
              childInputRef.current.select();
            }
          }}
        >
          call H5 input
        </button> */}
      {/* <button onClick={() => myHandlerRef.current?.signOut()}>
          App-Sign-Out
        </button>
        <button onClick={() => myHandlerRef.current?.removeItem()}>
          Remove Item
        </button>
        <button onClick={() => myHandlerRef.current?.notify('테스트메시지')}>
          Message
        </button>
        <button onClick={() => myHandlerRef.current?.removeItem()}>Rm2</button> */}

      {/* <div className='card'>
          <button
            onClick={() => {
              flushSync(plusCount);
            }}
          >
            count is {count}
          </button>
        </div> */}
      {/* setCount(count+1) 과의 차이점 확인
        flushSync는 강제로 throttle 무마시킴 10번 rerender함 => no-batch-render */}

      {/* <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button> */}
    </>
  );
}

export default App;
