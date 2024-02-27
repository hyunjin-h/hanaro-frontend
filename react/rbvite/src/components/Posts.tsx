import { useEffect, useState } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useSession } from '../contexts/session-context';
import { useFetch } from '../hooks/fetch';
import { useTimeout } from '../hooks/timeout';
import { Login } from './Login';
import Post, { PostType } from './Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultData: [],
  });
  const { id } = useParams();
  const location = useLocation();
  console.log(location);

  const [searchParams] = useSearchParams({ q: '' });
  const r = searchParams.get('r'); //r=(~~~)
  const q = searchParams.get('q');
  // useTimeout(() => setSearchParams({ q: 'qqq' }), 1000); // ?q=qqq
  //items?id=1
  //items/1
  const [searchStr, setSearchStr] = useState(''); // 검색어 유지 가능
  useEffect(() => {
    setSearchStr(q || '');
  }, []);

  return (
    <div className='active'>
      <h1>{searchStr}</h1>
      {isLoading && <h1>Fetching Posts...</h1>}
      {error && <h3 style={{ color: 'gray' }}>Error: {error}</h3>}
      <h3>#{loginUser?.id}`s Posts</h3>
      <ul className='un-list'>
        {!loginUser && (
          <>
            <h4>로그인 해</h4>
            <Login />
          </>
        )}

        {posts?.map((post) => <Post key={post.id} postData={post} />)}
      </ul>
    </div>
  );
}
