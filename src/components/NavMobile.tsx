import { useState } from 'react';

export const NavMobile = () => {
  //active nav state
  const [activeNav, setActiveNav] = useState('');
  return (
    <div className='flex flex-col justify-end p-4'>
      <div className='pt-5 ml-auto'>
        <ul
          className='flex flex-col list-none uppercase
          gap-5'
        >
          <li className='pl-5'>
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
          <li className='pl-5'>
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
          <li className='pl-5'>
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
          <li className='pl-5'>
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
          <li className='pl-5'>
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
    </div>
  );
};
