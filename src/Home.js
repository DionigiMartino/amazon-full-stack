import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            </div>

            <div className="home__row">
                <Product 
                    id="1323123"
                    title='The lean Startup' 
                    price={19.99} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' 
                    rating={4} 
                />
                <Product 
                    id="312331"
                    title='Fu sera e fu mattina' 
                    price={10.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/41CefBag0OL._SX323_BO1,204,203,200_.jpg' 
                    rating={5} 
                />
            </div>

            <div className="home__row">
                <Product 
                    id="3123321"
                    title='Uomo della provvidenza' 
                    price={15.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/41nn-ziDRDL._SX357_BO1,204,203,200_.jpg' 
                    rating={3} 
                />
                <Product 
                    id="12312221"
                    title='Vincitore' 
                    price={12.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/41-Kv7ImSeL._SX355_BO1,204,203,200_.jpg' 
                    rating={2} 
                />
                <Product 
                    id="31232231"
                    title='Fu sera e fu mattina' 
                    price={10.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/41CefBag0OL._SX323_BO1,204,203,200_.jpg' 
                    rating={5} 
                />
            </div>

            <div className="home__row">
                <Product 
                    id="312331231"
                    title='LG 29WK600 Monitor 29" UltraWide 21:9 LED IPS HDR, 2560x1080, AMD FreeSync 75Hz, Audio Stereo 10W, HDMI (HDCP 2.2), Display Port 1.2, Uscita Audio, Flicker Safe, Bianco' 
                    price={279.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51Y%2BzyB4BPL._AC_SL1000_.jpg' 
                    rating={5} 
                />
            </div>
        </div>
    )
}

export default Home;
