'use client';
import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FaArrowUp } from 'react-icons/fa';
const ScrollButton = () => {
  return (
    <div className="absolute z-[300]">
      <ScrollToTop showUnder={160}>
        <FaArrowUp className="icon-[pajamas--scroll-up] text-3xl text-pink-500" />
      </ScrollToTop>
    </div>
  );
};

export default ScrollButton;
