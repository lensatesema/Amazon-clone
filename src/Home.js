import React from "react";
import "./home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="Ethiopian Flag In Ethiopia, Rastafarian, Ethiopia Flag Pullover Hoodie"
            price={29.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/B1i3u9-Q-KS._CLa%7C2140%2C2000%7CB1kY7UbdVfS.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
          />
          <Product
            id="12321341"
            title="Ethiopian/Eritrean Traditional Coffee Set Sábá ሳባ Edition. Full Set"
            price={109.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61qscYvyjyL._AC_SX679_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="SZEROYAA Men's Hipster African Tribal Graphic Patchwork Design Slim Fit Long Sleeve Button up Mandarin Collar Shirts"
            price={27.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61YXOd-g0JL._AC_UY879_.jpg"
          />
          <Product
            id="23445930"
            title="
Click image to open expanded view
Ethiopian/Eritrean, Habeshan, African Hand Made Traditional Coffee Pot (Jebena)."
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/31+jdh3d7JL._AC_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
