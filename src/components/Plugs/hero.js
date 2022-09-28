import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

function Hero(props) {
  return (
    <section key={props._key} className="relative flex-col min-h-screen mx-auto ">
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-900 ">
        <div className="absolute inset-0 opacity-90 ">
          <div className="relative z-10 flex items-center justify-center w-full min-h-screen mx-auto overflow-hidden text-base bg-gray-100 md:block">
            <Fade>
              <img
                className="object-cover w-full min-h-screen"
                width="1260"
                height="1250"
                alt="ajmatova"
                src="https://res.cloudinary.com/djoqdhbiv/image/upload/v1664335751/web/ImagenesFondo/legado-dona-santa-009_b0pqmb.jpg"
              />
            </Fade>
          </div>
        </div>
        <div className="relative z-40 flex flex-col items-center justify-center w-full max-w-lg p-6 bg-white rounded shadow-lg ">
          <div className="max-w-6xl font-mono font-bold text-left md:text-lg">{props.tagline}</div>
          <div className="lg:px-0">
            <h2 className="mt-6 mb-6 font-serif text-3xl font-bold text-center ">{props.heading}</h2>
          </div>
          <Link to="/quienes-somos" className="btn red">
            Explorar trama
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
