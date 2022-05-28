import React from 'react'
import check from '../images/secondcheck.svg'
import section2 from '../images/section2.svg'
import complete from '../images/icon_complete.svg'
import price from '../images/icon_price.svg'
import hour from '../images/icon_24hrs.svg'
import pro from '../images/icon_professional.svg'
import picTesti from '../images/profile_photo_1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';


function content() {
  return (
    <div>
      {/* Header 2 */}
      <section className="second" id="our-services">
        <div className="container delete-padding">
          <div className="row">
            <div
              className="col-lg-6 d-flex justify-content-center"
            >
              <img
                className="img-service img-fluid ms-md-11"
                src={section2}
                alt=""
              />
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <div className="second-desc pr-md-12">
                <h2
                  className="sm-mid title-content"
                >
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </h2>
                <p
                  className="second-desc-sub sm-mid"
                >
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
                <div
                  className="d-flex second-desc-item sm-mid"
                >
                  <img src={check} alt="" />
                  <p className="second-desc-item-p">
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                  </p>
                </div>
                <div
                  className="d-flex second-desc-item sm-mid"
                >
                  <img src={check} alt="" />
                  <p className="second-desc-item-p">
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </p>
                </div>
                <div
                  className="d-flex second-desc-item sm-mid"
                >
                  <img src={check} alt="" />
                  <p className="second-desc-item-p">
                    Sewa Mobil Jangka Panjang Bulanan
                  </p>
                </div>
                <div
                  className="d-flex second-desc-item sm-mid"
                >
                  <img src={check} alt="" />
                  <p className="second-desc-item-p">
                    Gratis Antar - Jemput Mobil di Bandara
                  </p>
                </div>
                <div
                  className="d-flex second-desc-item sm-mid"
                >
                  <img src={check} alt="" />
                  <p className="second-desc-item-p">
                    Layanan Airport Transfer / Drop In Out
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="ms-md-11" id="why-us">
        <div className="container mt-5 delete-paddin">
          <div className="row ms-13">
            <h2 className="third mb-3 title-why-us" data-aos="fade-right">Why Us?</h2>
            <p className="m-0 ms-3">
              Mengapa harus pilih Binar Car Rental?
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="card col-3 third-card-item ">
              <div className="card-body card-body-whyus">
                <img src={complete} alt="" />
                <h5 className="card-title pt-3 third-card-title">Mobil Lengkap</h5>
                <p className="card-text">
                  Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
            <div className="card col-3 third-card-item">
              <div className="card-body card-body-whyus">
                <img src={price} alt="" />
                <h5 className="card-title pt-3 third-card-title">Harga Murah</h5>
                <p className="card-text">
                  Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain
                </p>
              </div>
            </div>
            <div
              className="card col-3 third-card-item"
            >
              <div className="card-body card-body-whyus">
                <img src={hour} alt="" />
                <h5 className="card-title pt-3 third-card-title">Layanan 24 Jam</h5>
                <p className="card-text">
                  Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu
                </p>
              </div>
            </div>
            <div
              className="card col-3 third-card-item"
            >
              <div className="card-body card-body-whyus">
                <img src={pro} alt="" />
                <h5 className="card-title pt-3 third-card-title">
                  Sopir Professional
                </h5>
                <p className="card-text">
                  Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial">
        <div className="row mt-5">
          <div className="container delete-padding">
            <h2 className="text-center fourth mb-3 title-testi">
              Testimonial
            </h2>
            <p className="text-center fourth-sub">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item">
                <div className="fourth-carousel-padding">
                  <div className="card mb-3 card-custom">
                    <div className="row g-0 my-auto mt-40px">
                      <div className="col-md-4 d-flex align-items-center">
                        <img
                          src={picTesti}
                          className="img-fluid rounded-start ms-md-5 img-small"
                          alt="Testi 1"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body testi-content">
                          <span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </span>
                          <p className="card-text desc-card">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <div className="card-text">
                            <h5 className='name-card'>John Dee 32, Bromo</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="fourth-carousel-padding">
                  <div className="card mb-3 mx-auto card-custom">
                    <div className="row g-0 my-auto mt-40px">
                      <div className="col-md-4 d-flex align-items-center">
                        <img
                          src={picTesti}
                          className="img-fluid rounded-start ms-md-5 img-small"
                          alt="Testi 1"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body testi-content">
                          <span className="text-left">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </span>
                          <p className="card-text desc-card">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <div className="card-text">
                            <h5 className='name-card'>John Dee 32, Bromo</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="fourth-carousel-padding">
                  <div className="card mb-3 mx-auto card-custom">
                    <div className="row g-0 my-auto mt-40px">
                      <div className="col-md-4 d-flex align-items-center">
                        <img
                          src={picTesti}
                          className="img-fluid rounded-start ms-md-5 img-small"
                          alt="Testi 1"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body testi-content">
                          <span>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                          </span>
                          <p className="card-text desc-card">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod”
                          </p>
                          <div className="card-text">
                            <h5 className='name-card'>John Dee 32, Bromo</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex justify-content-center martop0">
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
                className="fourth-carousel-button holder"
              >
                <i class="bi bi-chevron-left"></i>
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
                className="fourth-carousel-button holder ms-4"
              >
                <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth" id="tester">
        <div className="container mt-5 delete-padding">
          <div className="row fifth-card ms-md-11">
            <div className="col-12">
              <div className="card text-center fifth-card-content">
                <div className="card-body">
                  <h1 className="card-title fifth-card-title">
                    Sewa Mobil di (Lokasimu) Sekarang
                  </h1>
                  <p className="card-text fifth-card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <a href="/cars" className="btn btn-success fifth-btn"
                  >Mulai Sewa Mobil</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container delete-padding mt-5">
          <div className="row ms-2 ms-md-11 smalllr-1rem">
            <div className="col-lg-5 justify-content-start">
              <h2 className="mb-3 ms-13 faq-h2">
                Frequently Asked Question
              </h2>
              <p className="ms-13">
                Berikut adalah beberapa pertanyaan yang umum ditanyakan
              </p>
            </div>
            <div className="col-lg-7 justify-content-end sixth-accordion-sm">
              <div className="accordion" id="accordionExample">
                <div
                  className="accordion-item"
                >
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each element.
                      These classNamees control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="accordion-item mt-4"
              >
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element. These
                    classNamees control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item mt-4"
              >
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element. These
                    classNamees control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item mt-4"
              >
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the fourth item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element. These
                    classNamees control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div
                className="accordion-item mt-4"
              >
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the fifth item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element. These
                    classNamees control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default content