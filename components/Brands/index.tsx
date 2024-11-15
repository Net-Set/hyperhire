"use client";
import React, { useEffect } from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import Image from "next/image";
const Brands = () => {
  useSlideShow(3000); // Adjust the interval as needed

  return (
<>
  <div className="relative flex overflow-x-hidden">
    <div className="py-12 animate-marquee whitespace-nowrap flex">
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg  bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_1.png" className="mr-4"alt="brand1" width={50} height={30} />
        <p className="text-white">
        해외 마케팅
        </p>
      </span>
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg  bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_2.png" className="mr-4"alt="brand1" width={50} height={30} />
        <p className="text-white">퍼블리셔</p>
      </span>
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg  bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_3.png" className="mr-4"alt="brand1" width={50} height={30} />
       <p className="text-white"> 캐드원(제도사)</p>
      </span>
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg  bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_4.png" className="mr-4"alt="brand1" width={50} height={30} />
        <p className="text-white">해외 세일즈</p>
      </span>
    
    </div>

    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex">
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg   bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_1.png" className="mr-4" alt="brand1" width={50} height={30} />
       <p className="text-white"> 해외 마케팅</p>
      </span>
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg  bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_2.png" className="mr-4"alt="brand1" width={50} height={30} />
        <p className="text-white">  퍼블리셔</p>
      </span>
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg  bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_3.png" className="mr-4"alt="brand1" width={50} height={30} />
        <p className="text-white">캐드원(제도사)</p>
      </span>
      <span className="flex items-center text-4xl mx-4 border p-2 rounded-lg  bg-[#39b7d7]">
      <Image src="/images/icon_hero/icon_4.png" className="mr-4"alt="brand1" width={50} height={30} />
       <p className="text-white"> 해외 세일즈</p>
      </span>
    
    </div>
  </div>
</>
  );
};

export default Brands;

const useSlideShow = (interval: number) => {
  useEffect(() => {
    const slides = document.querySelectorAll(".single-brand");
    let currentIndex = 0;

    const showSlide = (index: number) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    };

    const intervalId = setInterval(nextSlide, interval);

    return () => clearInterval(intervalId);
  }, [interval]);
};

export { useSlideShow };
