import React from 'react'

function footer() {
    return (
        <div className='container footer my-5 d-flex justify-content-between flex-column flex-md-row gap-5'>
            <div className='d-flex flex-column'>
                <p>Jalan Suroyo No. 161 Mayangan Kota<br />Probolonggo 672000</p>
                <p className="mt-2">binarcarrental@gmail.com</p>
                <p className="mt-2">081-233-334-808</p>
            </div>
            <div className='d-flex flex-column'>
                <a href="#services" className="text-decoration-none text-dark">Our services</a>
                <a href="#whyus" className="text-decoration-none text-dark mt-3">Why Us</a>
                <a href="#testimonial" className="text-decoration-none text-dark mt-3">Testimonial</a>
                <a href="#faq" className="text-decoration-none text-dark mt-3">FAQ</a>
            </div>
            <div className='d-flex flex-column'>
                <p>Connect with us</p>
                <div className="flex gap-2">
                    <a href="/" className="px-1"><i className="bi bi-facebook"></i></a>
                    <a href="/" className="px-1"><i className="bi bi-instagram"></i></a>
                    <a href="/" className="px-1"><i className="bi bi-twitter"></i></a>
                    <a href="/" className="px-1"><i className="bi bi-envelope-fill"></i></a>
                    <a href="/" className="px-1"><i className="bi bi-twitch"></i></a>
                </div>
            </div>
            <div>
                <p>Copyright Binar 2022</p>
                <div className="logo"></div>
            </div>
        </div>
    )
}

export default footer