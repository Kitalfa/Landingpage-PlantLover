import mainLogo from '../img/main-logo.png';

const Footer = () => {
  return (
    <footer className='bg-light-green relative pt-6'>
      <div className='container'>
        <div className='flex flex-col md:flex-row place-content-evenly py-5 md:items-start items-center'>
          <div className='pb-6'>
            <div>
              <img src={mainLogo} />
            </div>
          </div>
          <div className='pb-6 md:w-max w-1/5'>
            <h5 className='pb-3 text-xl font-bold'>Pages</h5>
            <ul className=''>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Main Page
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Our Story
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Blog
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Contact Us
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  FAQ
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className='pb-6 md:w-max w-1/5'>
            <h5 className='pb-3 text-xl font-bold'>Shop</h5>
            <ul className=''>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  All Collections
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Collection
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Product Page
                </a>
              </li>
            </ul>
          </div>
          <div className='pb-6 md:w-max w-1/5'>
            <h5 className='pb-3 text-xl font-bold'>Shop</h5>
            <ul className=''>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  All Collections
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Collection
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Product Page
                </a>
              </li>
            </ul>
          </div>
          <div className='pb-6 md:w-max w-1/5 '>
            <h5 className='pb-3 text-xl font-bold'>Follow Us</h5>
            <ul className=''>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Instagram
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Facebook
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Twitter
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Pinterest
                </a>
              </li>
              <li className='text-lg mb-2'>
                <a href='#' className='p-0'>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='py-4 col-md-6 pl-12'>
        <p>© 2023 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
