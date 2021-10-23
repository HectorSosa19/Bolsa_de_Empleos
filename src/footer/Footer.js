import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Job Bag</h4>
              <ul className="list-unstyled">
              <li>About us</li>
              <li>Client</li>
              <li>Testimony</li>
              </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Service</h4>
            <ul className="list-unstyled">
              <li>Design-UI</li>
              <li>Front-End</li>
              <li>Back-End</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contact us</h4>
            <ui className="list-unstyled">
              <li>Santiago</li>
              <li>La Romana</li>
              <li>Districto Nacional</li>
            </ui>
          </div>
           {/* Column4 */}
          <div className="col">
            <h4>Social Network</h4>
            <ul className="list-unstyled">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Linkendin</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Job Bag | All right reserved |
            Terms of service| Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;