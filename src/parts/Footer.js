import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-md-3">
            <BrandIcon />
            <p className="font-weight-300 text-gray-500 text-brand">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-xs-2 col-md-3">
            <div className="text-helper">
              <h5 style={{ marginLeft: 15 }}>For Beginners</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    New Account
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Start booking a room
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Use payments
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-2 col-md-3">
            <div className="text-helper">
              <h5 style={{ marginLeft: 15 }}>Explore Us</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Our Careers
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Privacy
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Terms & Conditions
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-2 col-md-3">
            <div className="text-helper">
              <h5 style={{ marginLeft: 15 }}>Connect Us</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    support@staycation.id
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    021 - 2208 - 1996
                  </Button>
                </li>
                <li className="list-group-item">
                  <Button type="link" href="/register">
                    Staycation, Kemang, Jakarta
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="copyrights text-center">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
