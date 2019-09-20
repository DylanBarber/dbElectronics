// Dependencies
import React from "react";

const Footer = () => {
  return (
    // {/* <!-- Footer --> */}
    // <div className='footerWrapper'>
    <footer className="page-footer font-small primary-color pt-4 align-items-end">
      {/* <!-- Footer Links --> */}
      <div className="container text-center text-md-left">
        {/* <!-- Grid row --> */}
        <div className="row">
          {/* <!-- Grid column --> */}
          <div className="col-md-4 mx-auto">
            {/* <!-- Content --> */}
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Disclaimer
            </h5>
            <p>
              DB Electronics is a publicy traded company. Access to the
              information and the documents contained on this portion of DB
              Electronics' website is restricted for regulatory reasons.
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr className="clearfix w-100 d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="col-md-2 mx-auto">
            {/* <!-- Links --> */}
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">News</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Sign up for our Newsletter!</a>
              </li>
              <li>
                <a href="#!">DB News</a>
              </li>
              <li>
                <a href="#!">Industry News</a>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}

          <hr className="clearfix w-100 d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="col-md-2 mx-auto">
            {/* <!-- Links --> */}
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Legal</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Please</a>
              </li>
              <li>
                <a href="#!">Don't</a>
              </li>
              <li>
                <a href="#!">Sue</a>
              </li>
              <li>
                <a href="#!">Me</a>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}

          <hr className="clearfix w-100 d-md-none" />

          {/* <!-- Grid column --> */}
          <div className="col-md-2 mx-auto">
            {/* <!-- Links --> */}
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Rewards
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Sign up!</a>
              </li>
              <li>
                <a href="#!">Customer Deals</a>
              </li>
              <li>
                <a href="#!">Member Deals</a>
              </li>
            </ul>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row --> */}
      </div>
      {/* <!-- Footer Links --> */}

      {/* <!-- Call to action --> */}

      <hr />
      {/* <!-- Social buttons --> */}
      <ul className="list-unstyled list-inline text-center">
        <li className="list-inline-item">
          <a href="###" className="btn-floating btn-fb mx-1">
            <i className="fab fa-facebook-f"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="###" className="btn-floating btn-tw mx-1">
            <i className="fab fa-twitter"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="###" className="btn-floating btn-gplus mx-1">
            <i className="fab fa-google-plus-g"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="###" className="btn-floating btn-li mx-1">
            <i className="fab fa-linkedin-in"> </i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href="###" className="btn-floating btn-dribbble mx-1">
            <i className="fab fa-dribbble"> </i>
          </a>
        </li>
      </ul>
      {/* <!-- Social buttons --> */}

      {/* <!-- Copyright --> */}
      <div className="footer-copyright text-center py-3">
        © 2019 Copyright:
        <a href="./index.html"> DBElectronics.com</a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // </div>
  );
};

export default Footer;
