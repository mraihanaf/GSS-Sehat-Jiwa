function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-transparent backdrop-blur-md text-black p-8 border-t border-gray-200" id="Contact">
            <div className="container mx-auto bg-transparent">
        
                <div className="text-center bg-transparent">
                    <p className="text-sm bg-transparent text-gray-600">Made with ❤️ by Penta Uno Dev.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;