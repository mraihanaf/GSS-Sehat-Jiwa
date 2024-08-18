function Footer(){
    const year = new Date().getFullYear()
    return(
        <footer>
            <img src="" alt="Sekolah-Sehat" />
            <img src="" alt="Merdeka-Belajar" />
            <div id="contact">
                <h3>Contact</h3>
                <p>Lokasi</p>
                <p>Situs</p>
                <p>E-mail</p>
                <hr />

            </div>

            <ul>
                <li><a href="#"></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>

            </ul>
            <hr />
            <p>Copyright {year} - Penta-uno Developer</p>
        </footer>
    )
}

export default Footer;