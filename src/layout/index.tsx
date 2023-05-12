import { ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

export interface Props {
  children: ReactNode;
}

const Layout = (props: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout
