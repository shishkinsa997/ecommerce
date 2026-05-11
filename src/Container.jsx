import { useState, memo, useEffect } from 'react';
import Header from '@components/layout/Header';
import Button from '@components/ui/Button';
import Footer from '@components/layout/Footer';
import Content from '@pages/Content';

const HeaderMemo = memo(Header)
const FooterMemo = memo(Footer)

const Container = () => {

  const [pageType, setPageType] = useState(() => {
    if (localStorage.getItem('pageType')) {
      return JSON.parse(localStorage.getItem('pageType'))
    } else {
      return 'tv'
    }
  });
  const [cart, setCart] = useState(() => {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'))
    } else {
      return {}
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('pageType', JSON.stringify(pageType))
  }, [cart, pageType])

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
