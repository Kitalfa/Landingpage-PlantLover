import patternOverlay4 from '../img/pattern-overlay4.png';
import patternOverlay5 from '../img/pattern-overlay5.png';

const Suscribre = () => {
  return (
    <section id='subscribe' className='grid py-5 relative overflow-hidden p-5'>
      <div className='container mx-auto'>
        <div className='grid-row-1 my-12 py-12'>
          <div className=''>
            <h2 className='font-inter text-6xl font-medium mb-2'>
              Get a FREE Plant Care Guide by joining our Newsletter
            </h2>
            <form className='border-none pt-12 w-full flex'>
              <input
                className='pl-[25px] bg-gray capitalize grow shrink'
                type='email'
                name='EMAIL'
                placeholder='Enter your email address here'
                required
              />
              <button
                className='btn btn-primary uppercase cursor-pointer px-2.5 py-1.5 rounded-r-lg'
                type='submit'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='-z-10'>
        <img
          src={patternOverlay4}
          alt='pattern'
          className='absolute top-0 left-0'
        />
      </div>
      <div className='-z-10'>
        <img
          src={patternOverlay5}
          alt='pattern'
          className='absolute top-0 right-0'
        />
      </div>
    </section>
  );
};

export default Suscribre;
