import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { importCar, carsFilter } from "../slicer";

import Card from './productCard'

const searchForm = () => {
    const dispatch = useDispatch(); 
 
    const getData = () => { 
        axios 
        .get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json") 
        .then((res) => { 
            dispatch(importCar(res.data)); 
        }) 
        .catch((err) => { 
            console.log(err); 
        }); 
    }; 
 
    useEffect(() => { 
        getData(); 
    }, []); 
 
    const initialValue = { 
        driver: "", 
        date: "", 
        time: "", 
        capacity: 0, 
    }; 
 
    const [inputs, setInputs] = useState(initialValue); 
 
    const handleSubmit = () => { 
        if(JSON.stringify(inputs) === JSON.stringify(initialValue)) { 
        getData(); 
        } else { 
        dispatch(carsFilter(inputs)); 
        } 
    }; 
 
    const handleChange = (e) => { 
        setInputs({ 
            ...inputs, 
            [e.target.name]: e.target.value, 
        }); 
    }; 
    const cars = useSelector((state) => state.sliceReducer.data);

    return (
        <div>
            <div className="card card-cari mx-auto">
                <div className="card-body">
                    <div className="card-title">
                        <h6 className="fw-bold">Pencarianmu</h6>
                    </div>
                    <form action="#" method="GET" className="row">
                        <div className="col col-cari me-3" onclick="selectActive()">
                            <label className="form-label" for="tipeDriver">Tipe Driver</label>
                            <div className="input-group mb-3">
                                <select onChange={handleChange}
                                    className="form-select"
                                    id="tipeDriver"
                                    name="tipeDriver"
                                    value="params.tipeDriver"
                                >
                                    <option className="option-cari" selected disabled hidden>
                                        Pilih Tipe Driver
                                    </option>
                                    <option className="option-cari" value="1">Dengan Sopir</option>
                                    <option className="option-cari" value="0">
                                        Tanpa Sopir (Lepas Kunci)
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="col col-cari me-3" onclick="selectActive()">
                            <label className="form-label" for="tanggal">Tanggal</label>
                            <div className="input-group mb-3">
                                <input onChange={handleChange}
                                    type="date"
                                    className="form-control"
                                    id="tanggal"
                                    name="tanggal"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col col-cari me-3" onclick="selectActive()">
                            <label className="form-label" for="waktuJemput"
                            >Waktu Jemput/Ambil</label
                            >
                            <div className="input-group mb-3">
                                <select onChange={handleChange}
                                    className="form-select"
                                    id="waktuJemput"
                                    name="waktuJemput"
                                    required
                                >
                                    <option selected disabled hidden>Pilih Waktu Jemput</option>
                                    <option value="08:00:00">
                                        <div className="div d-flex">
                                            <div className="justify-content-start">08.00</div>
                                            <div className="justify-content-end">WIB</div>
                                        </div>
                                    </option>
                                    <option value="09:00:00">
                                        <div className="div d-flex">
                                            <div className="justify-content-start">09.00</div>
                                            <div className="justify-content-end">WIB</div>
                                        </div>
                                    </option>
                                    <option value="10:00:00">
                                        <div className="div d-flex">
                                            <div className="justify-content-start">10.00</div>
                                            <div className="justify-content-end">WIB</div>
                                        </div>
                                    </option>
                                    <option value="11:00:00">
                                        <div className="div d-flex">
                                            <div className="justify-content-start">11.00</div>
                                            <div className="justify-content-end">WIB</div>
                                        </div>
                                    </option>
                                    <option value="12:00:00">
                                        <div className="div d-flex">
                                            <div className="justify-content-start">12.00</div>
                                            <div className="justify-content-end">WIB</div>
                                        </div>
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="col col-cari me-3" onclick="selectActive()">
                            <label className="form-label" for="jumlahPenumpang"
                            >Jumlah Penumpang</label
                            >
                            <div className="input-group mb-3">
                                <input onChange={handleChange}
                                    type="number"
                                    className="form-control"
                                    id="jumlahPenumpang"
                                    name="jumlahPenumpang"
                                    required
                                />
                            </div>
                        </div>
                        <button onclick = {handleSubmit}
                            type="submit"
                            id="load-btn"
                            className="btn btn-success button-cari me-3"
                            
                        >
                            Cari Mobil
                        </button>
                    </form>
                </div>
            </div>

            <div className='searchcarcontainer'>
                <div className='carrow'>
                {
                            cars.map((item, index) => <Card key={index} product={item} />)
                }

                </div>

            </div>

        </div>
    )
}

export default searchForm