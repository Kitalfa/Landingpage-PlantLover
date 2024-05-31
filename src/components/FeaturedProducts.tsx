import productItem from '../img/product-item.jpg';
import productItem1 from '../img/product-item1.jpg';

const FeaturedProducts = () => {
  return (
    <section id='featured-products' className='p-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='card relative'>
          <div className='relative overflow-hidden group'>
            <img
              src={productItem}
              alt='plant'
              className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110'
            />
          </div>
          <div className='absolute bottom-0 left-0 p-5 text-white' z-10>
            <h2 className='text-4xl font-semibold'>Colorful Indoors</h2>
            <div className='mt-4 uppercase'>
              <a href='#'>
                <span className='block'>Shop These</span>
              </a>
            </div>
          </div>
        </div>
        <div className='card relative'>
          <div className='relative overflow-hidden group'>
            <img
              src={productItem1}
              alt='plant'
              className='w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110'
            />
          </div>
          <div className='absolute bottom-0 left-0 p-5 text-white'>
            <h2 className='text-4xl font-semibold'>Green Landscapes</h2>
            <div className='mt-4 uppercase'>
              <a href='#'>
                <span className='block'>Shop These</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
