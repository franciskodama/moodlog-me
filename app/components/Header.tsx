import { auth, UserButton } from '@clerk/nextjs';

import Link from 'next/link';
import Flag from './Flag';

export const Header = ({ locale }: { locale: string }) => {
  const user = auth();

  return (
    <>
      <div className='nav bg-primary pb-6 px-10 flex justify-between items-center'>
        <Link href={user ? '/map' : '/'}>
          <h1 className='text-2xl text-secondary font-bold hover:text-green-500'>
            moodlog.me
          </h1>
        </Link>
        <div className='flex items-center gap-3'>
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
          <Flag countryCode={locale} />
        </div>
      </div>
    </>
  );
};
