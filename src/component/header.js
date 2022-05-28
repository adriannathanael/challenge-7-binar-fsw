import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import mobil from '../images/carmerheader.png';

function header() {
    return (
        // Header Kiri
        <div className='hero'>
            <div className="container-fluid m-0">
                <div className="row d-flex align-items-center hero">
                    <div className="col-md-5">
                        <h1 className="judul">
                            Sewa & Rental Mobil Terbaik di Kawasan Rembang
                        </h1>
                        <p className="deskripsi">
                            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
                        </p>
                        <a href='/cars' className="btn btn-primary" type="button">
                            Mulai Sewa Mobil
                        </a>
                    </div>

                    {/* Header Kanan */}
                    <div className="col-md-7 d-flex align-self-end">
                       
                        <img className="img-hero img-fluid" alt='mobil' src={mobil} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default header;
