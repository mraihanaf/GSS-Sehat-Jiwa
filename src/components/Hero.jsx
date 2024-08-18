function Hero(){
    let apaKabarNames = ["Diriku", "Aku", "Saya", "Jiwaku"]
    return(
        <section id="hero" className='h-screen flex items-center justify-center'>
           <div className='container flex justify-center'>
                <div className='flex flex-wrap'>
                    <div className='w-full self-center px-4'>
                        <h1 className='font-bold text-5xl'>Apa kabar, <span className='mt-5 text-teal-500'>{apaKabarNames[1]}?</span></h1>
                        <h2 className='font-semibold mt-3'>Seluruh Anak di dunia banyak yang gila</h2>
                    </div>
                </div>
           </div>  
        </section>
    )
}

export default Hero;