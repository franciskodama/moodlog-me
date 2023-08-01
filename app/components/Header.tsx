import { auth, UserButton } from '@clerk/nextjs';

import Link from 'next/link';

export const Header = () => {
  const user = auth();

  return (
    <>
      <div className='nav bg-primary py-4 px-10 flex justify-between items-center'>
        <Link href={user ? '/map' : '/'}>
          <h1 className='text-lg text-white font-medium hover:text-green-500'>
            moodlog.me
          </h1>
        </Link>
        <div>
          {user && !user.userId && (
            <div className='flex items-center text-white font-medium'>
              <Link href='sign-in'>
                <h2 className='hover:text-green-500 px-4'>sign in</h2>
              </Link>
              <Link href='sign-up'>
                <h2 className='hover:text-green-500 px-4'>sign up</h2>
              </Link>
            </div>
          )}
          <UserButton
            userProfileMode='navigation'
            userProfileUrl={
              typeof window !== 'undefined'
                ? `${window.location.origin}/profile`
                : undefined
            }
            afterSignOutUrl='/'
            appearance={{
              elements: {
                userButtonPopoverFooter: 'hidden',
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
