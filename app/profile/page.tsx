import { UserProfile } from '@clerk/nextjs';

export default async function ProfilePage() {
  return (
    <div className='relative'>
      <UserProfile
        appearance={{
          elements: {
            navbar: 'hidden',
            navbarMobileMenuRow: 'hidden',
            card: 'shadow-none w-full bg-secondary',
            rootBox: 'w-full flex justify-center items-center',
            headerTitle: 'text-2xl font-medium mb-4',
            pageScrollBox: 'pt-4',
          },
        }}
      />
      <div className='absolute top-0 left-0 translate-x-[-2%] w-12 h-[15em] bg-secondary' />
    </div>
  );
}
