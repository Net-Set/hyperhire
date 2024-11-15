"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark ">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/footer_logo.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/footer_logo.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5 text-black">
                  우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px] text-black">
                  010-0000-0000
                </p>

                <p className="mb-1.5 text-sectiontitle text-black">
                  aaaaa@naver.com
                </p>

              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row  md:gap-0 lg:w-2/3 xl:w-7/12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-5">
                  {/* block 1 */}
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
                    <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                      <Image src="/images/footer_icon/icon_1.png" className="" alt="Brand" width={30} height={30} />
                      <h3 className="mb-2 mt-1 text-xs text-black">해외 개발자 원격 채용</h3>
                      <p className="text-left text-xs text-black">바로가기.</p>
                    </div>
                  </motion.div>
                  {/* block 2 */}
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
                           <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                      <Image src="/images/footer_icon/icon_2.png" className="" alt="Brand" width={30} height={30} />
                   <h3 className="mb-2 mt-1 text-xs text-black">외국인 원격 채용 (비개발)</h3>
                      <p className="text-left text-xs  text-black">바로가기</p>
                    </div>
                  </motion.div>
                  {/* block 3 */}
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
                    <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                      <Image src="/images/footer_icon/icon_3.png" className="" alt="Brand" width={30} height={30} />
                   <h3 className="mb-2 mt-1 text-xs text-black ">한국어 가능 외국인 채용</h3>
                      <p className="text-left text-xs  text-black">바로가기.</p>
                    </div>
                  </motion.div>
                  {/* block 4 */}
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
         <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                      <Image src="/images/footer_icon/icon_4.png" className="" alt="Brand" width={30} height={30} />
                   <h3 className="mb-2 mt-1 text-xs text-black ">해외 개발자 활용 서비스</h3>
                      <p className="text-left text-xs  text-black ">바로가기.</p>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              {/* four block grid  */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-5">
                {/* block 1 */}
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
                  className="animate_top mx-auto w-full"
                >
                   <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                  <p className="font-bold text-black"> 상호명</p>
               <h3 className="mb-2 mt-1 text-xs text-black">하이퍼하이어</h3>
                  <p className="text-left text-xs text-black">Hyperhire India Private Limited</p>
                  </div>
                </motion.div>
                {/* block 2 */}
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
                  className="animate_top mx-auto w-full"
                >
                        <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                  <p className="font-bold text-black"> 대표 CEO</p>
               <h3 className="mb-2 mt-1 text-xs ">김주현</h3>
                  <p className="text-left text-xs text-black">Juhyun Kim</p>
                  </div>
                </motion.div>
                {/* block 3 */}
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
                  className="animate_top mx-auto w-full"
                >
                       <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                  <p className="font-bold text-black"> 사업자등록번호 CIN</p>
               <h3 className="mb-2 mt-1 text-xs text-black">427-86-01187</h3>
                  <p className="text-left text-xs text-black">U74110DL2016PTC290812 </p>
                  </div>
                </motion.div>
                {/* block 4 */}
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
                  className="animate_top mx-auto w-full"
                >
                          <div className="flex flex-col items-start justify-center p-6 bg-white rounded-lg shadow-md">
                  <p className="font-bold text-black">주소 ADDRESS</p>
               <h3 className="mb-2 mt-1 text-xs text-black ">서울특별시 강남대로 479, 지하 1층 238호 </h3>
                  <p className="text-left text-xs text-black">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                    110053 India</p>
                  </div>
                </motion.div>
                </div>

            </div>
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0 mt-5">
            <h3 className="text-xs font-bold text-black">ⓒ 2023 Hyperhire</h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
