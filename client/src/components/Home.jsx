// Dependencies
import React from "react";
import { Slide } from "react-slideshow-image";

// CSS Files
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "../css/style.css";
import "../css/slide.css";

//Slide images
const slideImages = [
  "./lib/img/slideImg1.png",
  "./lib/img/slideImg2.jpeg",
  "./lib/img/slideImg3.png"
];

//Properties for slideshow
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

class Home extends React.PureComponent {
  render() {
    return (
      // {/* <!-- Content --> */}
      <div className="page-wrapper">
        <div className="container container-bg homeContainer">
          <div className="slide-container">
            <Slide {...properties}>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                </div>
              </div>
            </Slide>
          </div>

          <h2 className="text-center p-4">
            <u>
              <b>Who We Are</b>
            </u>
          </h2>
          <p className="p-4 homeText">
          dbElectronics has been a leading electronic components distributor for over 45 years. We've helped millions of customers from businesses to educational institutions to hobbyists and along the way we're proud to have built a solid reputation for great prices, great selection, and a great source for hard-to-find electronic components. dbElectronics' buying expertise allows even the smallest company or individual to enjoy the same competitive pricing edge typically reserved for the highest volume buyers.

dbElectronics is the only electronic components distributor to give customers a true choice. dbElectronics offers more than 30,000 of the industry's most popular name brand components but what sets us apart is a large selection of in-stock house and generic brands that are typically priced 15% to 25% less, and an ever changing selection of Special Buys with a savings of 30% to 50% and more. dbElectronics is the kind of company that you want to work with.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
