import postThumb1 from '../img/post-thumb-1.jpg';
import postThumb2 from '../img/post-thumb-2.jpg';
import postThumb3 from '../img/post-thumb-3.jpg';

const LatestBlog = () => {
  return (
    <section id='latest-blog' className='py-5 p-5 flex justify-center'>
      <div className='container'>
        <div className='bg-transparent border-0 mt-5 mb-4 flex flex-col gap-2'>
          <div>
            <h2 className='text-6xl leading-6 font-medium font-inter my-6'>
              Latest Blog Posts
            </h2>
          </div>
          <p>
            Evidence also reveals that plants are telling us how to achieve
            health and wholeness for humanity and the earth herself.
          </p>
          <div>
            <a href='#' className='uppercase underline'>
              View all Posts
            </a>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='col-md-4'>
            <div className='border-0 py-6'>
              <img src={postThumb1} alt='plant' />
            </div>
            <div>
              <h3 className='my-2 text-3xl font-medium'>
                <a href='#'>Decorative touches for your design</a>
              </h3>
              <p>
                Sem magna ut pharetra vitae duis eu senectus sem risus. Morbi
                non, semper vestibulum euismod accumsan...
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='border-0 py-6'>
              <img src={postThumb2} alt='plant' />
            </div>
            <div>
              <h3 className='my-2 text-3xl font-medium'>
                <a href='#'>Giftable scents which warms the heart</a>
              </h3>
              <p>
                Morbi non, semper vestibulum euismod accumsan. Sem magna ut
                pharetra vitae duis eu senectus sem risus...
              </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='border-0 py-6'>
              <img src={postThumb3} alt='plant' />
            </div>
            <div>
              <h3 className='my-2 text-3xl font-medium'>
                <a href='#'>Creative ideas to make this holiday special</a>
              </h3>
              <p>
                Pharetra vitae sem magna ut duis eu senectus sem risus. Morbi
                non, semper vestibulum euismod accumsan ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
