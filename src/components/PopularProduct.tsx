import productItem2 from '../img/product-item2.jpg';
import productItem3 from '../img/product-item3.jpg';
import productItem4 from '../img/product-item4.jpg';
import patternOverlay3 from '../img/pattern-overlay3.png';

const PopularProduct = () => {
  return (
    <section
      id='popular-products'
      className='bg-light-green py-20 relative overflow-hidden p-5'
    >
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className=' absolute top-0 right-0'>
            <img src={patternOverlay3} alt='pattern' />
          </div>
          <div className='col-span-3 bg-transparent mb-16'>
            <div className='section-header'>
              <h3 className='text-6xl font-semibold font-overTheRainbow pb-10'>
                most popular
              </h3>
              <h2 className='text-6xl font-medium font-inter'>
                Indoor Air Purifier Plants for your Living Space
              </h2>
            </div>
            <p className='mt-4 text-lg'>
              Scientific research indicates that plants communicate with
              insects, animals, human beings and other plants to keep themselves
              alive and safe. Evidence also reveals that plants are telling us
              how to achieve health and humanity and the earth herself.
            </p>
            <div className='btn-box mt-4'>
              <a href='#' className='text-green-600 hover:underline'>
                View all Products
              </a>
            </div>
          </div>
          <div className='col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-transparent'>
              <div className='card-image mb-4'>
                <img src={productItem2} alt='plant' className='w-full h-auto' />
              </div>
              <h3 className='text-center text-4xl font-medium'>
                <a href='#' className='hover:text-green-600'>
                  Cane plants
                </a>
              </h3>
            </div>
            <div className='bg-transparent'>
              <div className='card-image mb-4'>
                <img src={productItem3} alt='plant' className='w-full h-auto' />
              </div>
              <h3 className='text-center text-4xl font-medium'>
                <a href='#' className='hover:text-green-600'>
                  Ficus plants
                </a>
              </h3>
            </div>
            <div className='bg-transparent'>
              <div className='card-image mb-4'>
                <img src={productItem4} alt='plant' className='w-full h-auto' />
              </div>
              <h3 className='text-center text-4xl font-medium'>
                <a href='#' className='hover:text-green-600'>
                  Vinca vines
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;
