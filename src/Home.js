import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_TheElectricalLifeofLouisWain/b259e32e-7f17-446d-9897-a04484f8078a._UR3000,600_SX1500_FMwebp_.jpeg"
          alt=""
        />{" "}
        <div className="home__row">
          <Product
            id={1234455}
            title="The Lean Start up"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />
          <Product
            id={1234345545}
            title="
            MSI Gaming GeForce RTX 3080 OC Ventus 3X LHR Graphics Card 10GB GDRR6X 320-Bit PCI Express 4.0 x16 Torx Fan 3 Ampere Architecture 1x HDMI 2.1 3X DisplayPort"
            price={2049.99}
            image="https://m.media-amazon.com/images/I/61wXuGxze2L._AC_SL1280_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={4535346543}
            title="
            ZOTAC Gaming GeForce GTX 1660 6GB GDDR5 192-bit Gaming Graphics Card, Super Compact, ZT-T16600K-10M"
            price={524}
            image="https://m.media-amazon.com/images/I/71EMGwJsMOL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={34435425}
            title="
            FIFA 22 - PlayStation 5"
            price={69.88}
            image="https://m.media-amazon.com/images/I/81i+wJtuuNL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={565463456}
            title="
           ZOTAC Gaming GeForce GTX 1660 6GB GDDR5 192-bit Gaming Graphics Card, Super Compact, ZT-T16600K-10M"
            price={524}
            image="https://m.media-amazon.com/images/I/71EMGwJsMOL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={765767}
            title="
            NETGEAR Nighthawk Cable Modem CM1200 - Compatible with all Cable Providers including Xfinity by Comcast, Spectrum, Cox"
            price={167.03}
            image="https://m.media-amazon.com/images/I/71y6+EhELmL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
