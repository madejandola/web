import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Blog",
    slug: "/blog"
  },
  {
    title: "Artistas",
    slug: "/artistas"
  },
  {
    title: "Expo/Muestras",
    slug: "/expo-muestras"
  },
  {
    title: "Quienes somos",
    slug: "/quienes-somos"
  },
  {
    title: "Contacto",
    slug: "/contacto"
  }
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link key={i} onClick={closeMenu} to={route.slug} activeClassName="font-bold" className="my-3 font-mono text-xl text-right text-gray-100 cursor-pointer">
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
