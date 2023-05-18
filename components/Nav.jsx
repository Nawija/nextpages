import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);

    return (
        <nav className="flex-between w-full mb-8 lg:mb-12 pt-3 z-50">
            <Link href="/" className="flex-center gap-2 z-50">
                <Image
                    src="/assets/images/logo.svg"
                    alt="Seovileo Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />
                <p className="font-satoshi font-semibold text-lg text-gray-700 -tracking-wide">
                    Seovileo
                </p>
            </Link>
            <button
                aria-label="Menu"
                onClick={handleMenu}
                className="group lg:hidden bg-gray-100 shadow-md p-2.5 transition-colors duration-200 z-50 rounded-lg"
            >
                <div
                    className={`w-5 h-1 transition-all duration-200 bg-gray-600 m-1 rounded-lg ${
                        showMenu ? "translate-y-2 rotate-45" : ""
                    }`}
                />
                <div
                    className={`w-3 h-1 transition-all duration-200 bg-gray-600 m-1 rounded-lg ${
                        showMenu ? "opacity-0" : ""
                    }`}
                />
                <div
                    className={`w-5 h-1 transition-all duration-200 bg-gray-600 m-1 rounded-lg ${
                        showMenu ? "-translate-y-2 -rotate-45" : ""
                    }`}
                />
            </button>
            <ul
                className={
                    !showMenu
                        ? "absolute transition-all -translate-x-full duration-200 top-0 left-0 w-full h-full opacity-0 lg:opacity-100 lg:static lg:translate-x-0 lg:flex lg:flex-row lg:items-center lg:justify-end lg:font-semibold lg:text-sm flex-center flex-col"
                        : "absolute transition-transform translate-x-0 duration-200 top-0 left-0 w-full h-full opacity-100 bg-gray-200 flex-center flex-col space-y-2 shadow-lg font-bold"
                }
            >
                <li>
                    <Link href="/" label="Strona Główna" className="p-3">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/" label="Usługi" className="p-3">
                        Usługi
                    </Link>
                </li>
                <li>
                    <Link href="/" label="Projekty" className="p-3">
                        Projekty
                    </Link>
                </li>
                <li>
                    <Link href="/" label="Projekty" className="p-3">
                        Projekty
                    </Link>
                </li>
                <li>
                    <Link href="/" label="Kontakt" className="p-3">
                        Kontakt
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link href="/" label="Darmowa Wycena" className="p-3">
                        Darmowa Wycena
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
