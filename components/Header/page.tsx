import Link from 'next/link';
import { Logo } from '../Logo';
import { LoggedIn } from './Logged-In';
import { LoggedOut } from './Logged-Out';
import { getWeather } from '@/lib/weather.server';
import { UserButton, currentUser } from '@clerk/nextjs';
import Flag from '../Flag';
type Props = {
  city: string;
  region: string;
  country: string;
};

export const Header = async ({ location }: { location: Props }) => {
  const user = await currentUser();
  const weather = await getWeather(location.city);

  console.log('---  🚀 ---> | user:', user);
  console.log('---  🚀 ---> | weather:', weather);

  return (
    <>
      <div className='nav bg-secondary pb-6 px-2 ml-1 flex justify-between items-center'>
        <Link href={user ? '/map' : '/'}>
          <Logo />
        </Link>

        {user ? (
          <LoggedIn location={location} />
        ) : (
          <LoggedOut location={location} />
        )}

        {user && !user?.id && (
          <div className='flex items-center text-primary font-medium'>
            <Link href='sign-in'>
              <h2 className='hover:text-red-500 px-4'>sign in</h2>
            </Link>
            <Link href='sign-up'>
              <h2 className='hover:text-red-500 px-4'>sign up</h2>
            </Link>
          </div>
        )}

        <div className='mr-1 border-2 border-primary rounded-full shadow-lg shadow-primary'>
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
                avatarBox: 'w-[3em] h-[3em]',
              },
            }}
          />
        </div>

        <div className='mr-2 shadow-lg shadow-primary'>
          <Flag countryCode={location.country} />
        </div>
      </div>
    </>
  );
};
