"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { LineMdChevronUp } from "./icon/LineMdChevronUp";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="fixed bottom-2 sm:bottom-4 right-2 sm:right-4 z-50"
        >
          <LineMdChevronUp className="scale-125" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
