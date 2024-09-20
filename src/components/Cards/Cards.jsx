import React from "react";
import Img1 from "../../assets/icon/1.png";
import Img2 from "../../assets/icon/2.png";
import Img3 from "../../assets/icon/3.png";
import { slideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Cards = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="container py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              variants={slideUp(0.2)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-xl rounded-xl px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img1}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">About</p>
              <p className="text-sm text-black/80 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
            <motion.div
              variants={slideUp(0.4)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img2}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">Connection</p>
              <p className="text-sm text-black/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
            <motion.div
              variants={slideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="bg-white shadow-md px-5 py-10 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto"
            >
              <img
                src={Img3}
                alt=""
                className="w-16 h-16 rounded-full object-contain p-3 bg-black"
              />
              <p className="text-xl font-semibold">Plugin</p>
              <p className="text-sm text-black/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                voluptatem, aspernatur tempore doloribus voluptatum ex magnam
                accus
              </p>
              <a href="#">Learn More</a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
