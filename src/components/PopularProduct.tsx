import productItem2 from '../img/product-item2.jpg';
import productItem3 from '../img/product-item3.jpg';
import productItem4 from '../img/product-item4.jpg';

const PopularProduct = () => {
  return (
    <section
      id='popular-products'
      className='bg-light-green py-20 relative overflow-hidden'
    >
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* <!-- <div className="pattern-overlay2">
        <img src="images/pattern-overlay2.png" alt="pattern" className="absolute">
      </div> -->
      <div className="pattern-overlay3 absolute top-0 right-0">
        <img src="images/pattern-overlay3.png" alt="pattern">
      </div> */}
          <div className='card-header col-span-3 bg-transparent mb-16'>
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
          <div className='product-row col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='card product-card bg-transparent'>
              <div className='card-image mb-4'>
                <img src={productItem2} alt='plant' className='w-full h-auto' />
              </div>
              <h3 className='product-title text-center text-4xl font-medium'>
                <a href='#' className='hover:text-green-600'>
                  Cane plants
                </a>
              </h3>
            </div>
            <div className='card product-card bg-transparent'>
              <div className='card-image mb-4'>
                <img src={productItem3} alt='plant' className='w-full h-auto' />
              </div>
              <h3 className='product-title text-center text-4xl font-medium'>
                <a href='#' className='hover:text-green-600'>
                  Ficus plants
                </a>
              </h3>
            </div>
            <div className='card product-card bg-transparent'>
              <div className='card-image mb-4'>
                <img src={productItem4} alt='plant' className='w-full h-auto' />
              </div>
              <h3 className='product-title text-center text-4xl font-medium'>
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
