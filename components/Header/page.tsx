import Link from 'next/link';
import { Logo } from '../Logo';
import { LoggedIn } from './Logged-In';
import { LoggedOut } from './Logged-Out';
import { getMoon, getWeather } from '@/lib/weather.server';
import { UserButton, currentUser } from '@clerk/nextjs';
import Flag from '../Flag';
import { LocationProps } from '@/lib/types';

export const Header = async ({ location }: { location: LocationProps }) => {
  const user = await currentUser();
  const weather = await getWeather(location.city);
  const moon = await getMoon(location.city);

  return (
    <>
      <div className='bg-secondary px-2 ml-1 flex justify-between items-center border-2 border-yellow-400'>
        <Link href={user ? '/map' : '/'}>
          <Logo />
        </Link>

        {user ? (
          <LoggedIn location={location} weather={weather} moon={moon} />
        ) : (
          <LoggedOut />
        )}

        {user && (
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
        )}

        <div className=' shadow-lg shadow-primary'>
          <Flag countryCode={location.country} />
        </div>
      </div>
    </>
  );
};
