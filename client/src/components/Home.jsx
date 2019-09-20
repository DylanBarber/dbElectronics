// Dependencies
import React from "react";
import { Slide } from "react-slideshow-image";

// CSS Files
import "../css/bootstrap.min.css";
import "../css/mdb.min.css";
import "../css/style.css";
import "../css/slide.css";

//Functions / Variables
const slideImages = [
  "./lib/img/slideImg1.png",
  "./lib/img/slideImg2.jpeg",
  "./lib/img/slideImg3.png"
];

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

class Home extends React.Component {
  render() {
    return (
      // {/* <!-- Content --> */}
      <div className="page-wrapper">
        <div className="container container-bg">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            semper, risus sit amet lacinia fringilla, dolor ligula faucibus mi,
            quis congue mauris mauris vel lacus. Proin suscipit convallis
            posuere. Suspendisse bibendum metus erat, ac placerat elit imperdiet
            at. Nunc non dolor nec dolor malesuada aliquet vel eu ipsum. Proin
            ultrices mauris urna, at maximus velit ultrices sed. Vivamus sed
            venenatis purus, ut feugiat sem. Nam sit amet tristique tellus, quis
            faucibus quam. Mauris venenatis justo id nibh euismod ultricies ut
            vehicula lectus. Integer non justo consectetur, fermentum turpis
            congue, viverra tortor. Vivamus lobortis, diam in consectetur
            viverra, arcu urna volutpat nisl, non pellentesque neque nisl et
            metus. Donec quam mi, tristique non efficitur a, malesuada vitae
            odio. Nullam feugiat, augue eu lobortis commodo, felis elit volutpat
            odio, vel semper arcu enim in eros. Nullam mollis sed nibh ut
            viverra. Vestibulum vehicula, magna eget feugiat venenatis, odio
            dolor commodo libero, in sodales lacus sem sed tortor. Curabitur
            posuere ante nec convallis suscipit. Aliquam felis enim, egestas id
            malesuada non, finibus id massa. Nunc hendrerit purus arcu, at
            commodo odio ultrices eget. Integer sit amet semper lorem. Phasellus
            consectetur purus id eros suscipit, nec malesuada nibh posuere.
            Suspendisse bibendum vulputate mattis.
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
