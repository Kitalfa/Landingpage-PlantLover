import { useState } from 'react';
import MainLogo from '../img/main-logo.png';
import { NavMobile } from './NavMobile';
import { NavDesktop } from './NavDesktop';

const Header = () => {
  //nav mobile state
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  return (
    <header className='sticky top-0 px-3 w-full z-10 bg-white'>
      {/* header - logo, nav, search, user items */}
      <div className='w-full container mx-auto flex items-center justify-between relative'>
        {/* logo */}
        <div>
          <a href='index.html'>
            <img src={MainLogo} alt='main-logo' />
          </a>
        </div>
        {/* burger menu */}
        <button
          onClick={() => setIsNavMobileOpen(!isNavMobileOpen)}
          className='lg:hidden'
          type='button'
        >
          <svg
            className='menu w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
          >
            <path
              fill='currentColor'
              d='M4 7v2h24V7zm0 8v2h24v-2zm0 8v2h24v-2z'
            />
          </svg>
        </button>
        {/* nav - initially hidden - show on desktop */}
        <div className='hidden lg:flex'>
          <NavDesktop />
        </div>
        {/* nav mobile - showing by default - hidden on desktop */}
        <div
          className={`${
            isNavMobileOpen ? 'max-h-0' : 'max-h-full'
          } fixed w-full h-full left-0 -z-10 transition-all duration-300 lg:hidden`}
        >
          <NavMobile />
        </div>
        {/* search, user items */}
        <div className='right-block flex justify-end items-center'>
          <div id='search-bar' className='mt-1.5 pr-2'>
            <form action='' autoComplete='on'>
              <input
                name='search'
                type='text'
                placeholder="What're we looking for ?"
                className='border-none focus:ring-0'
              />
              <button type='submit' className='border-none'>
                <svg
                  className='w-6 h-6'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                >
                  <title>Search</title>
                  <path
                    fill='currentColor'
                    d='M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z'
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className='flex gap-3'>
            <a href='#'>
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <title>User</title>
                <path
                  fill='currentColor'
                  d='M16 5c-3.855 0-7 3.145-7 7c0 2.41 1.23 4.55 3.094 5.813C8.527 19.343 6 22.883 6 27h2c0-4.43 3.57-8 8-8s8 3.57 8 8h2c0-4.117-2.527-7.656-6.094-9.188A7.024 7.024 0 0 0 23 12c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5s-5-2.227-5-5s2.227-5 5-5z'
                />
              </svg>
            </a>
            <a href='#'>
              <svg
                className='w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <title>Like</title>
                <path
                  fill='currentColor'
                  d='M9.5 5C5.363 5 2 8.402 2 12.5c0 1.43.648 2.668 1.25 3.563a9.25 9.25 0 0 0 1.219 1.468L15.28 28.375l.719.719l.719-.719L27.53 17.531S30 15.355 30 12.5C30 8.402 26.637 5 22.5 5c-3.434 0-5.645 2.066-6.5 2.938C15.145 7.066 12.934 5 9.5 5zm0 2c2.988 0 5.75 2.906 5.75 2.906l.75.844l.75-.844S19.512 7 22.5 7c3.043 0 5.5 2.496 5.5 5.5c0 1.543-1.875 3.625-1.875 3.625L16 26.25L5.875 16.125s-.484-.465-.969-1.188C4.422 14.216 4 13.274 4 12.5C4 9.496 6.457 7 9.5 7z'
                />
              </svg>
            </a>
            <a href='cart.html'>
              <svg
                className='bag w-6 h-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <title>Shopping Cart</title>
                <path
                  fill='currentColor'
                  d='M16 3c-2.746 0-5 2.254-5 5v1H6.062L6 9.938l-1 18L4.937 29h22.125L27 27.937l-1-18L25.937 9H21V8c0-2.746-2.254-5-5-5zm0 2a3 3 0 0 1 3 3v1h-6V8a3 3 0 0 1 3-3zm-8.063 6H11v3h2v-3h6v3h2v-3h3.063l.875 16H7.063z'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
