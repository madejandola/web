import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";

const BackSliderHome = (props) => {
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="absolute inset-0 z-0 w-full h-screen mb-0 overflow-hidden bg-black opacity-100">
      {props.arrows ? (
        <div className="relative max-w-2xl mx-auto ">
          <button
            className="absolute left-0 z-50 items-center justify-center hidden w-20 h-20 text-4xl text-center text-blue-800 duration-700 bg-white rounded-full shadow-xl cursor-pointer hover:opacity-90 md:flex top-1/3 hover:translate-y-1"
            onClick={handleClick}
            data-position={position - 1}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className="absolute right-0 z-50 items-center justify-center hidden w-20 h-20 text-4xl text-center text-blue-800 duration-700 bg-white rounded-full shadow-xl cursor-pointer hover:opacity-90 md:flex top-1/3 hover:translate-y-1"
            // right="true"
            onClick={handleClick}
            data-position={position + 1}
          >
            <AiOutlineArrowRight />
          </button>
          <div className="absolute left-0 right-0 z-50 flex items-center justify-center bg-opacity-50 bottom-2">
            {Array(...Array(total)).map((val, index) => (
              <button
                className="mx-1 text-4xl text-blue-800 cursor-pointer"
                key={index}
                onClick={handleClick}
                data-position={index}
              >
                {index === position ? <BiRadioCircleMarked /> : <BiRadioCircle />}
              </button>
            ))}
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div>
          <div className="opacity-50">{children}</div>
        </div>
      )}
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <>
      <Carousel defaultWait={5000} maxTurns={100} /*wait for 1000 milliseconds*/>
        {data.map((item, i) => (
          <Fade key={item.title}>
            <div className="relative w-auto h-screen md:w-full md:h-full">
              <img title={item.title} className="object-cover w-full h-full" alt={item.title} src={item.image} />
            </div>
          </Fade>
        ))}
      </Carousel>
    </>
  );
};

export default BackSliderHome;


const data = [
  {
    title: "artistas",
    image:
      "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },

  {
    title: "Expo/Muestras",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1909&q=80",
  },

  {
    title: "Quienes somos",
    image:
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1972&q=80",
  },
  {
    title: "Contacto",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];