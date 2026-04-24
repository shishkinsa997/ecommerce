import { useState } from 'react';
import Header from '@components/layout/Header';
import Button from '@components/ui/Button';
import Footer from '@components/layout/Footer';
import Content from '@pages/Content';

const Container = () => {

  const [pageType, setPageType] = useState('tv');
  const [cart, setCart] = useState({});

  return (
    <>
      <Header
        pageType={pageType}
        setPageType={setPageType}
        cart={cart}
        setCart={setCart}
      />
      <Content
        pageType={pageType}
        setPageType={setPageType}
        cart={cart}
        setCart={setCart}
        />
      <Footer />
    </>
  )
}

export default Container
