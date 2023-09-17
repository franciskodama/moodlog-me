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
    <div className='bg-secondary mb-6 px-2 flex justify-between items-center'>
      <Link href={user ? '/map' : '/'}>
        <Logo />
      </Link>
      <div className='flex'>
        {user ? <LoggedIn weather={weather} moon={moon} /> : <LoggedOut />}

        <div className='flex items-center gap-4 ml-4'>
          {user && (
            <div className='mr-1 border-2 border-primary rounded-full shadow-md shadow-primary'>
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
                    userButtonPopoverCard:
                      'border-2 border-primary shadow-md shadow-primary bg-yellow',
                    userPreviewAvatarBox:
                      'border-2 border-primary shadow-md shadow-primary',
                  },
                }}
              />
            </div>
          )}

          {user && (
            <div className='flex items-center'>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold truncate w-[10ch]'>
                  {location.city}
                </span>
                <span className='text-xs font-semibold w-[10ch]'>
                  {location.region}
                </span>
              </div>
              <div className='shadow-md shadow-primary'>
                <Flag countryCode={location.country} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
