import { useState, memo } from 'react';
import Header from '@components/layout/Header';
import Button from '@components/ui/Button';
import Footer from '@components/layout/Footer';
import Content from '@pages/Content';

const HeaderMemo = memo(Header)
const FooterMemo = memo(Footer)

const Container = () => {

  const [pageType, setPageType] = useState('tv');
  const [cart, setCart] = useState({});

  return (
    <>
      <HeaderMemo
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
      <FooterMemo />
    </>
  )
}

export default Container
