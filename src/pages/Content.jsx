import TvListing from '@pages/TvListing';
import PhoneListing from '@pages/PhoneListing';
import LaptopListing from '@pages/LaptopListing';
import Cart from '@pages/Cart';

const Content = ({ pageType, setPageType, cart, setCart }) => {
  return (
    <>
      <main className="mx-auto w-full tabular-nums">
        <div className="max-w-360 mx-auto gap-6 p-8 flex items-start justify-center flex-col lg:flex-row">
          {pageType === 'tv' && <TvListing cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />}
          {pageType === 'phone' && <PhoneListing cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />}
          {pageType === 'laptop' && <LaptopListing cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />}
          {pageType === 'cart' && <Cart cart={cart} setCart={setCart} pageType={pageType} setPageType={setPageType} />}
      </div>
    </main>
    </>
  );
};

export default Content;