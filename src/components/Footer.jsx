function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className=" backdrop-blur-md bg-transparent text-black p-8 border-t border-white-200" id="Contact">
            <div className="container mx-auto bg-transparent">
        
                <div className="text-center bg-transparent">
                    <p className="text-md bg-transparent text-gray-600">Made with ❤️ by Penta Uno Dev.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;