import { useEffect, useState } from 'react';
import { useSession } from '../contexts/session-context';
import { FaAngleUp } from 'react-icons/fa6';
import { FaAngleDown } from 'react-icons/fa6';
import { Login } from './Login';
import { useToggle } from '../hooks/toggle';
import { useFetch } from '../hooks/fetch';
import clsx from 'clsx';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
  // isOpen: boolean; //서버에 없어도 가능!, optional로 해도되고
};
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

  return (
    <div className='active'>
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
        <h1>
          #{loginUser?.id}의 게시글 수: {posts?.length}
        </h1>
        {posts?.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  );
}
const Post = ({ post }: { post: PostType }) => {
  const [isOpen, toggleOpen] = useToggle();

  return (
    // <li
    //   className={clsx(
    //     isOpen && 'isActive',
    //     isOpen && 'border',
    //     'border-green-500'
    //   )}
    // >
    <li className={clsx({ border: isOpen, 'border-green-500': isOpen })}>
      <strong className={clsx(isOpen && 'text-green-500 underline', 'italic')}>
        {post.title}
      </strong>
      <button
        onClick={() => toggleOpen()}
        className='rounded ml-3 text-green-600'
      >
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && <div className={'text-sm text-gray-500'}>{post.body}</div>}
    </li>
  );
};
