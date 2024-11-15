"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top mx-auto max-w-c-1154"
              >
                <h4 className="animate_top mx-auto max-w-c-1154 text-white">풀타임, 파트타임</h4>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="animate_top mx-auto max-w-c-1154"
              >
                <h2 className="mb-5 pr-16 text-2xl font-bold text-white">
                  최고의 실력을 가진<br />
                  <span className="before:bg-titlebg dark:before:bg-titlebgdark">
                    외국인 인재를 찾고 계신가요?
                  </span>
                </h2>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1.5, delay: 1.5 }}
                viewport={{ once: true }}
                className="animate_top mx-auto max-w-c-1154"
              >
                <p className="text-white">
                  법률 및 인사관리 부담없이<br />
                  1주일 이내에 원격으로 채용해보세요.
                </p>
                <p className="mt-5 text-white">
                  개발자가 필요하신가요? <br />
                </p>
              </motion.div>

              {/* three grid box */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-5">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1.8, delay: 1.8 }}
                  viewport={{ once: true }}
                  className="animate_top mx-auto max-w-c-1154"
                >
                  <div className="flex flex-col items-start justify-center p-6 border-t-4 border-white rounded-lg shadow-md">
                    <h3 className="mb-2 text-xl font-bold text-white">평균 월 120만원</h3>
                    <p className="text-center text-white">임금을 해당 국가를 기준으로 계산합니다.</p>
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 2, delay: 2 }}
                  viewport={{ once: true }}
                  className="animate_top mx-auto max-w-c-1154"
                >
                  <div className="flex flex-col items-start justify-center p-6 border-t-4 rounded-lg shadow-md">
                    <h3 className="mb-2 text-xl font-bold text-white">최대 3회 인력교체</h3>
                    <p className="text-center text-white">막상 채용해보니 맞지 않아도 걱정하지 마세요. </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 2.3, delay: 2.3 }}
                  viewport={{ once: true }}
                  className="animate_top mx-auto max-w-c-1154"
                >
                  <div className="flex flex-col items-start justify-center p-6 border-t-4 rounded-lg shadow-md">
                    <h3 className="mb-2 text-xl font-bold text-white">평균 3일, 최대 10일</h3>
                    <p className="text-center text-white">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="animate_right hidden md:w-1/2 lg:block">
  <div className="relative 2xl:-mr-7.5">
    {/* three profile card swipe slider */}
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="mt-8 z-1 -mr-20 flex flex-col items-center justify-center p-6 border-t-4 border-white bg-white rounded-lg shadow-md h-80">
          <Image
            src="/images/card/profile_pic.png"
            alt="Profile 1"
            className="w-24 h-24 rounded-full mb-4"
            width={96}
            height={96}
          />
          <h3 className="mb-2 text-xl font-bold text-black">John Doe</h3>
          <p className="text-center text-black">Software Engineer</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-64 z-10 flex flex-col items-center justify-center p-6 border-t-4 border-white bg-white rounded-lg border-2 shadow-lg h-96">
          <Image
            src="/images/card/profile_pic.png"
            alt="Profile 2"
            className="w-24 h-24 rounded-full mb-4"
            width={96}
            height={96}
          />
          <h3 className="mb-2 text-xl font-bold text-black">Jane Smith</h3>
          <p className="text-center text-black">Product Manager</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="mt-8 z-1 -ml-10 flex flex-col items-center justify-center p-6 border-t-4 border-white bg-white rounded-lg shadow-md h-80">
          <Image
            src="/images/card/profile_pic.png"
            alt="Profile 3"
            className="w-24 h-24 rounded-full mb-4"
            width={96}
            height={96}
          />
          <h3 className="mb-2 text-xl font-bold text-black">Alice Johnson</h3>
          <p className="text-center text-black">UX Designer</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
