import productItem5 from '../img/product-item5.jpg';
import productItem6 from '../img/product-item6.jpg';
import productItem7 from '../img/product-item7.jpg';

const RecentCollection = () => {
  return (
    <section id='recent-collections' className='bg-transparent overflow-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='relative'>
          <div className='relative overflow-hidden group rounded-lg'>
            <img
              src={productItem5}
              alt='plant'
              className='w-full h-auto object-cover ease-out transition-transform duration-300 group-hover:scale-110'
            />
          </div>
          <div className='absolute bottom-0 left-0 p-5 text-white'>
            <h2 className='text-3xl font-semibold mb-2'>Colorful Indoors</h2>
            <a href='#'>
              <span className=''>Shop These</span>
            </a>
          </div>
        </div>

        <div className='relative'>
          <div className='relative overflow-hidden group rounded-lg'>
            <img
              src={productItem6}
              alt='plant'
              className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110'
            />
          </div>
          <div className='absolute bottom-0 left-0 p-5 text-white'>
            <h2 className='text-3xl font-semibold mb-2'>Green Landscapes</h2>
            <a
              href='#'
              className='relative overflow-hidden text-white'
              data-after='Shop These'
            >
              <span className=''>Shop These</span>
            </a>
          </div>
        </div>

        <div className='relative'>
          <div className='relative overflow-hidden group rounded-lg'>
            <img
              src={productItem7}
              alt='plant'
              className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110'
            />
          </div>
          <div className='absolute bottom-0 left-0 p-5 text-white'>
            <h2 className='text-3xl font-semibold mb-2'>Flowering Plants</h2>
            <a
              href='#'
              className='relative overflow-hidden text-white'
              data-after='Shop These'
            >
              <span className=''>Shop These</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentCollection;
