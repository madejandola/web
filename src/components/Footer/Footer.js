import React from "react"

function Footer() {
  return (
    <footer className="relative py-12 pb-0 text-center bg-gray-100">
      <div className="inline-block px-24 py-2 font-mono text-sm text-black hover:opacity-100 opacity-70">
        © {new Date().getFullYear()} realizado por
        <a target="_blank" className="inline-block ml-1" rel="noreferrer" href="https://www.santuan.com.ar">
          stn
        </a>
      </div>
    </footer>
  )
}

export default Footer
