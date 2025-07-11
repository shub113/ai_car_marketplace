import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { CarFront, Heart, Layout, ArrowLeft } from 'lucide-react';
import { checkUser } from '../lib/checkUser'

export const Header = async ({ isAdminPage = false }) => {
  const user = await checkUser();
  const isAdmin = user?.role === 'ADMIN';
  return (
    <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b' >
      <nav className='mx-auto px-4 flex items-center justify-between' >
        <Link href={isAdminPage ? '/admin' : '/'} className='flex' >
          <Image
            src='/logo.png'
            alt='logo'
            width={200}
            height={60}
            className='h-12 w-auto object-contain' />
          {isAdminPage && <span>Admin</span>}
        </Link>
        <div className='flex items-center space-x-2' >
          {isAdminPage ? <Link href={'/'} >
            <Button variant={'outline'} className='flex items-center gap-2' >
              <ArrowLeft size={18} />
              <span >back to app</span>
            </Button>
          </Link>
            :
            <SignedIn>
              <Link href={'/saved-cars'} >
                <Button>
                  <Heart size={18} />
                  <span className='hidden md:inline'>Saved Cars</span>
                </Button>
              </Link>
              {isAdmin ?
                <Link href={'/admin'} >
                  <Button variant={'outline'} >
                    <Layout size={18} />
                    <span className='hidden md:inline'>Admin</span>
                  </Button>
                </Link>
                :
                <Link href={'/reservations'} >
                  <Button variant={'outline'} >
                    <CarFront size={18} />
                    <span className='hidden md:inline'>Reservations</span>
                  </Button>
                </Link>
              }
            </SignedIn>
          }
          <SignedOut>
            <SignInButton forceRedirectUrl={'/'} >
              <Button variant={'outline'} >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              }
            }} />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}