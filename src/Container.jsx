import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Content from '@pages/Content';

const Container = () => {

  return (
    <>
      <Header />
      <Content pageType="tv"/>
      <Footer />
    </>
  )
}

export default Container
