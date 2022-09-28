import React from "react"
import Fade from "react-reveal/Fade"
import makeCarousel from "react-reveal/makeCarousel"

const CarouselUI = ({ children }) => (
  <div className="relative z-10 flex items-center justify-center w-full min-h-screen mx-auto overflow-hidden text-base bg-gray-900 md:block ">{children}</div>
)

const Carousel = makeCarousel(CarouselUI)

function HeroSlider(props) {
  return (
    <section key={props._key} className="relative flex flex-col min-h-screen mx-auto ">
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-red-500 ">
        <div className="absolute inset-0 opacity-30">
          <Carousel defaultWait={7000} maxTurns={5} /*wait for 1000 milliseconds*/>
            {props.imagesGallery.map(({ secure_url }) => (
              <Fade key={props.heading}>
                <img alt={props.heading} src={secure_url} className="object-cover w-full h-screen" />
              </Fade>
            ))}
          </Carousel>
        </div>
        <div className="relative z-40 flex flex-col items-center justify-center w-full max-w-xl px-12 ">
          <div className="lg:px-0">
            <h2 className="mb-3 font-mono text-6xl font-black text-center text-gray-100">{props.heading}</h2>
          </div>
          <div className="max-w-2xl font-sans text-3xl text-center text-gray-100">{props.tagline}</div>
          <div className="max-w-2xl mt-3 font-sans text-sm text-center text-gray-100">{props.label}</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSlider
