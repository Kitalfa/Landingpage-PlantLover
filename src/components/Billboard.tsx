import SingleImage from '../img/single-image.png';

const Billboard = () => {
  return (
    <section id='billboard' className='py-5 my-5 flex justify-center relative'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative'>
          <div className='md:col-span-1'>
            <div className='icon-box pb-5 flex flex-wrap items-center justify-between'>
              <div className='icon-number bg-dark-gray rounded-full text-white flex justify-center items-center w-16 h-16'>
                <span className='content-light'>1</span>
              </div>
              <div className='icon-content'>
                <h3 className='box-title'>Free Delivery</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className='icon-box pb-5 flex flex-wrap items-center justify-between'>
              <div className='icon-number bg-dark-gray rounded-full text-white flex justify-center items-center w-16 h-16'>
                <span className='content-light'>2</span>
              </div>
              <div className='icon-content'>
                <h3 className='box-title'>Wide Variety</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className='icon-box pb-5 flex flex-wrap items-center justify-between'>
              <div className='icon-number bg-dark-gray rounded-full text-white flex justify-center items-center w-16 h-16'>
                <span className='content-light'>3</span>
              </div>
              <div className='icon-content'>
                <h3 className='box-title'>Landscaping</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className='md:col-span-1'>
            <div className='image-holder text-center'>
              <img src={SingleImage} alt='banner' />
            </div>
          </div>
          <div className='md:col-span-1'>
            <div className='icon-box pb-5 flex flex-wrap items-center justify-between'>
              <div className='icon-number bg-dark-gray rounded-full text-white flex justify-center items-center w-16 h-16'>
                <span className='content-light'>4</span>
              </div>
              <div className='icon-content'>
                <h3 className='box-title'>Big Offers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className='icon-box pb-5 flex flex-wrap items-center justify-between'>
              <div className='icon-number bg-dark-gray rounded-full text-white flex justify-center items-center w-16 h-16'>
                <span className='content-light'>5</span>
              </div>
              <div className='icon-content'>
                <h3 className='box-title'>100% Secure Payment</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className='icon-box pb-5 flex flex-wrap items-center justify-between'>
              <div className='icon-number bg-dark-gray rounded-full text-white flex justify-center items-center w-16 h-16'>
                <span className='content-light'>6</span>
              </div>
              <div className='icon-content'>
                <h3 className='box-title'>Quality Guarantee</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
