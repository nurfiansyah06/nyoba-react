import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import TestimonyAccent from "assets/images/testimonial_.jpg";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 2 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h4 style={{ marginBottom: 20, fontSize: 24 }}>{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5
              className="h2 font-weight-light line-height-2 my-3"
              style={{ fontSize: 32 }}
            >
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName} , {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40, fontSize: 18 }}
                hasShadow
                isPrimary
                href={`/testimonial/${data._id}`}
                type="link"
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
