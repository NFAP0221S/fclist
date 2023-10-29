import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  // 특정 경로에서는 푸터를 렌더링하지 않음
  const shouldHideFooter = location.pathname === "/posts/new";

  return (
    <>
      <Header />
      {children}
      {!shouldHideFooter && <Footer />}
    </>
  );
}
