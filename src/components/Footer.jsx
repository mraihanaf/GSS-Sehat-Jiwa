function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="bg-gray-800 text-white p-4">
            <div className="flex items-center justify-between">
                <img src="https://via.placeholder.com/200x100" alt="Sekolah-Sehat" />
                <div className="flex-grow flex justify-center w-screen ">
                    <div id="contact" className="text-start">
                        <h3 className="text-3xl mb-2">Contact</h3>
                        <ul className=''>
                            <li><a href="#location">Lokasi</a></li>
                            <li><a href="#website">Situs</a></li>
                            <li><a href="mailto:example@example.com">E-Mail</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-4 border-gray-600"/>
            <div className="text-center">
                <p>&copy; {year} PentaUno-Dev. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
