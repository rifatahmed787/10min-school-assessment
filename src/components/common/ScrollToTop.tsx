"use client";
import React from "react";
import ScrollToTopComponent from "react-scroll-to-top";

const ScrollToTop = () => {
  const scrollButtonStyle = {
    backgroundColor: "#17795E",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    zIndex: "9999",
  };
  return (
    <>
      <ScrollToTopComponent
        smooth
        color="white"
        style={scrollButtonStyle}
        className="flex justify-center items-center p-2 animate-bounce"
      />
    </>
  );
};

export default ScrollToTop;