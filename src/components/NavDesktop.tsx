import { useState } from 'react';

export const NavDesktop = () => {
  //active nav state
  const [activeNav, setActiveNav] = useState('');
  return (
    <div>
      <ul className='flex flex-row justify-center items-center list-none uppercase'>
        <li className='pr-5 pl-5'>
          <a
            href='#'
            className={
              activeNav === '#home' ? 'nav-link active p-3' : 'nav-link'
            }
            onClick={() => setActiveNav('#home')}
          >
            Home
          </a>
        </li>
        <li className='pr-5  pl-5'>
          <a
            href='#about'
            className={
              activeNav === '#about' ? 'nav-link active p-3' : 'nav-link'
            }
            onClick={() => setActiveNav('#about')}
          >
            About
          </a>
        </li>
        <li className='pr-5 pl-5'>
          <a
            href='#popular-products'
            className={
              activeNav === '#shop' ? 'nav-link active p-3' : 'nav-link'
            }
            onClick={() => setActiveNav('#shop')}
          >
            Shop
          </a>
        </li>
        <li className='pr-5  pl-5'>
          <a
            href='#recent-collections'
            className={
              activeNav === '#collection' ? 'nav-link active p-3' : 'nav-link'
            }
            onClick={() => setActiveNav('#collection')}
          >
            Collection
          </a>
        </li>
        <li className='pr-5  pl-5'>
          <a
            href='#latest-blog'
            className={
              activeNav === '#blogs' ? 'nav-link active p-3' : 'nav-link'
            }
            onClick={() => setActiveNav('#blogs')}
          >
            Blogs
          </a>
        </li>
      </ul>
    </div>
  );
};
