'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode } from 'react';

type Time = 'morning' | 'afternoon' | 'evening';
const TimeTo = {
  morning: 'afternoon',
  afternoon: 'evening',
  evening: 'morning',
};

export default function HelloLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const time = pathname.replace(/\/hello\/(.*)$/, '$1');
  const goHelloByTime = () => {
    if (time in TimeTo) {
      const nextTime = TimeTo[time as Time];
      router.push(`/hello/${nextTime}`);
    }
  };
  return (
    <>
      <h1>
        {' '}
        Hello Layout
        <button onClick={goHelloByTime} className='float-end'>
          {time} →
        </button>
      </h1>
      <div className='border'>{children}</div>
      <div>
        <ul className='flex justify-between text-blue-400'>
          <li>
            <Link href='/hello'>Hello</Link>
          </li>
          <li>
            <Link href='/hi'>Hi</Link>
          </li>
          <li>
            <Link href='/hello/morning'>Morning</Link>
          </li>
          <li>
            <Link href='/hello/afternoon'>Afternoon</Link>
          </li>
          <li>
            <Link href='/hello/evening'>Evening</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
