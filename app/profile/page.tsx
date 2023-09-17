import { UserProfile } from '@clerk/nextjs';

export default async function ProfilePage() {
  return (
    <div className='relative'>
      <UserProfile
        appearance={{
          elements: {
            navbar: 'hidden',
            navbarMobileMenuRow: 'hidden',
            card: 'mt-12 shadow-none w-full bg-secondary',
            rootBox: 'w-full flex justify-center items-center',
            headerTitle: 'text-2xl font-medium mb-4',
            pageScrollBox: 'pt-4',
            userPreviewAvatarBox:
              'border-2 border-primary shadow-md shadow-primary mb-2',
          },
        }}
      />
      <div className='absolute top-12 left-0 translate-x-[-2%] w-12 h-[15em] bg-secondary' />
    </div>
  );
}
