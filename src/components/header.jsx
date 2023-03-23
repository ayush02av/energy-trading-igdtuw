import React from "react"
import Wallet from "./wallet"
import { Link } from "react-router-dom"

export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/"
                        >
                            Energy Trading Platform
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/store"
                                >
                                    <i className="fa fa-shop text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Marketplace</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/dashboard"
                                >
                                    <i className="fa fa-dashboard text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Dashboard</span>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/community"
                                >
                                    <i className="fa fa-users text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Community</span>
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Wallet />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}