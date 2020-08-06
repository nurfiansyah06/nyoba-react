import React from "react";
import ImageHero from "assets/images/picture.jpg";
import ImageHero_ from "assets/images/frame.jpg";
import IconCities from "assets/images/icon/ic_cities.svg";
import IconTraveler from "assets/images/icon/ic_traveler.svg";
import IconTreasure from "assets/images/icon/ic_treasure.svg";
import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked(params) {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-5 font-weight-light text-gray-500 w-75"
            style={{ fontSize: 16, lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-3"
            hasShadow
            isPrimary
            onClick={showMostPicked}
            style={{ fontWeight: 500 }}
          >
            Show Me Now
          </Button>
          <div className=" row mt-5">
            <div className="col-auto" style={{ marginRight: 45 }}>
              <img
                width="36"
                height="36"
                src={IconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 45 }}>
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 45 }}>
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="col-6 pl-5 d-none d-xl-block">
          <div style={{ width: 540, height: 410 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHero_}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
