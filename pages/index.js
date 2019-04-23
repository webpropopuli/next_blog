import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Typed, { TypedRef } from "react-typed";
import { Row, Col, Button, Container } from "reactstrap";

// import workItems from "../data/workItems.js";
const workItems = [
  [0, "Create blog posts static"],
  [0, "Move posts to Mongo and serve"],
  [0, "Fill in Portfolio items with real data"],
  [0, "Move Portfolio to Mongo"],
  [1, "Deploy to live site", "22April19"],
  [0, `Make 'real' pages in menu`],
  [0, `Style the menu as proper Nav`],
  [1, `Make workList dynamic`],
  [0, "Fix this awful styling"]
];
const openItems = workItems.filter(x => x[0] === 0).map(y => y[1]);
const closedItems = workItems.filter(x => x[0] === 1).map(y => y[1]);

debugger;
class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BaseLayout className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> David Marlowe </h2>
                        <div className="hero-section-content-intro">
                          Writes code, drinks coffee, loves dogs.
                        </div>
                      </div>
                      <img
                        className="image"
                        src="/static/images/david-and-pals.jpg"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>Hello.</h1>
                </div>

                <div className="hero-welcome-bio">
                  <p>
                    I'm a fullstack developer, former C warrior (yep, I know
                    what a pointer is) and soon-to-be ex-website designer (I'm
                    bad at colors).
                  </p>
                  <p>
                    This site is React, Express and NextJS and I'm working on it
                    daily so check back often if you're into development or just
                    plain stalking
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="typed-container">
                  <h4> What's next for this site?</h4>
                  <Typed
                    loop
                    typeSpeed={40}
                    backSpeed={10}
                    strings={openItems}
                    backDelay={1000}
                    fadeOut={true}
                    fadeOutDelay={100}
                    className="my-typed"
                  />
                </div>
              </Col>
              <div className="typed-container">
                <h4> Recent changes</h4>
                <Typed
                  loop
                  typeSpeed={40}
                  backSpeed={10}
                  strings={closedItems}
                  backDelay={1000}
                  fadeOut={true}
                  fadeOutDelay={100}
                  className="my-typed"
                />
              </div>
              <Col />
            </Row>
          </Container>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
