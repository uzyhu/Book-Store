import React, { Children } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

interface LayoutProps {
    children: React.ReactNode; //리액트로 만든 모든 컴포넌트들을 배치할 수 있다
}

const Layout = ({children} : LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
