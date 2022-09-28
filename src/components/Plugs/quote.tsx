import React from "react"
// import PortableText from "../components/portableText"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

function QuotePlug(props) {
  return (
    <section key={props._key} className="relative z-20 py-24 mx-auto bg-gray-100 ">
      <div className="relative z-20 flex flex-col items-center justify-center max-w-3xl px-4 py-12 mx-auto space-y-6 text-center shadow-2xl bg-gradient-to-br from-gray-100 to-gray-300 sm:px-6 lg:px-8">
        <ImQuotesLeft className="text-gray-500" />
        <div className="pt-2 font-serif text-xl font-black text-gray-900 uppercase">
          {props.label}
        </div>
        <div className="mb-6 font-serif text-4xl text-center text-gray-900 capitalize">
          {props.title}
        </div>
        <div className="max-w-xl mx-auto mt-2 font-serif text-lg leading-loose text-gray-900">
          {props.body}
        </div>
        <ImQuotesRight className="text-gray-500" />
      </div>
    </section>
  )
}

export default QuotePlug
