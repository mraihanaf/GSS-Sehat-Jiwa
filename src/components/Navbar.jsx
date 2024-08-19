function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-16 py-4 backdrop-blur-md bg-white/30 shadow-lg">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
                <div className="flex-1 flex justify-between items-center">
                <img src="https://kss-uks.mardawa.id/wp-content/uploads/2023/05/Logo-Sekolah-Sehat-3-e1684443819880.png" alt="Logo Sekolah Sehat" className=" h-16"/>
                </div>

                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <svg className="fill-current text-gray-900"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            <li><a className="md:p-4 py-3 px-0 block hover:text-gray-900 transition duration-300" href="#Home">Home</a></li>
                            <li><a className="md:p-4 py-3 px-0 block hover:text-gray-900 transition duration-300" href="#About">About</a></li>
                            <li><a className="md:p-4 py-3 px-0 block hover:text-gray-900 transition duration-300" href="#Sections">Sections</a></li>
                            <li><a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-gray-900 transition duration-300" href="#Contact">More</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navbar