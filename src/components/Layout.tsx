import Header from "./Header/Header";
import Offcanvas from "./Offcanvas/Offcanvas";
import Footer from "./Footer/Footer";
import Seo from "./Seo";
import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from 'react-scroll'
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <ToTop id="top" aria-hidden="true" />
      <Offcanvas />
      <Header />
        <main className="min-h-screen">{children}</main>
      <Footer />
      <Link aria-hidden="true" className="fixed bottom-0 right-0 z-50 p-4 m-4 font-mono text-2xl text-black duration-300 bg-gray-100 rounded-full cursor-pointer hover:text-gray-300 hover:bg-gray-800" to="top" smooth={true} duration={500}>
        <AiOutlineArrowUp />
      </Link>
    </>
  );
};

const ToTop = styled.div``;

export default Layout;
