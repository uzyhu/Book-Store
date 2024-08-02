import React, { Children } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode; //리액트로 만든 모든 컴포넌트들을 배치할 수 있다
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutStyle>{children}</LayoutStyle>
      <Footer />
    </>
  );
};

const LayoutStyle = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  padding: 20px 0;
`;

export default Layout;
