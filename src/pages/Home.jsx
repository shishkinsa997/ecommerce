import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Sidebar from '@components/layout/Sidebar';
import ProductGrid from '@components/common/ProductGrid';

const Home = () => {
  return (
    <>
      <Header />
        <main className="mx-auto w-full">
          <div className="max-w-360 mx-auto gap-6 p-8 flex items-start flex-col lg:flex-row">
            <Sidebar />
            <ProductGrid />
          </div>
        </main>
      <Footer />
    </>
  );
}

export default Home;