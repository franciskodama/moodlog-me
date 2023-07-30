import { UserProfile } from '@clerk/clerk-react';

const ProfilePage = () => {
  return (
    <div className='relative'>
      <UserProfile
        appearance={{
          elements: {
            navbar: 'hidden',
            navbarMobileMenuRow: 'hidden',
            card: 'shadow-none w-full',
            rootBox: 'w-full flex justify-center items-center',
            headerTitle: 'text-2xl font-medium mb-4',
            pageScrollBox: 'pt-4',
          },
        }}
      />
      <div className='absolute top-0 left-0 w-7 h-[15em] bg-primary' />
    </div>
  );
};
export default ProfilePage;
