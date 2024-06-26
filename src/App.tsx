import './App.css';
import Header from './components/Header.tsx';
import Billboard from './components/Billboard.tsx';
import patternOverlay from './img/pattern-overlay.png';
import patternOverlay1 from './img/pattern-overlay1.png';
import FeaturedProducts from './components/FeaturedProducts.tsx';
import PopularProduct from './components/PopularProduct.tsx';
import Suscribre from './components/Suscribre.tsx';
import RecentCollection from './components/RecentCollection.tsx';
import LatestBlog from './components/LatestBlog.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <>
      {/* components */}
      <Header />
      <Billboard />

      {/* pattern overlay */}
      <div>
        <img
          src={patternOverlay}
          alt='pattern'
          className='absolute right-0 bottom-[-50px]'
        />
      </div>
      <div className='absolute left-0 bottom-[-100px]'>
        <img src={patternOverlay1} alt='pattern' />
      </div>
      <FeaturedProducts />
      <PopularProduct />
      <Suscribre />
      <RecentCollection />
      <LatestBlog />
      <Footer />
    </>
  );
}

export default App;
