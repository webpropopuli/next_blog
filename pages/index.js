import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import Typed, { TypedRef } from "react-typed";
import { Row, Col, Button, Container } from "reactstrap";
import axios from "axios";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
      isFlipping: false,
      openItems: ["{fetching data from GitHub}"],
      closedItems: ["{we'll be right with you...}"]
    };
  }

  changeTheme() {
    //tbd  this should read from a theme file and iterate

    const myTheme = {
      "--main-text-color": "black",
      "--subtle-text-color": "#b8b8b8",
      "--typed-text-color": "#305040",
      "--bg-gradient-start": "#ffeeee",
      "--bg-gradient-end": "#dddddd",
      "--main-background-color": "var(--main-background-test)"
    };

    let root = document.documentElement;

    Object.entries(myTheme).forEach(([k, v]) => {
      root.style.setProperty(k, v);
    });

    // root.style.setProperty("--main-text-color", "black");

    // root.style.setProperty("--subtle-text-color", "#b8b8b8");
    // root.style.setProperty("--typed-text-color", "#305040");

    // root.style.setProperty("--bg-gradient-start", "#ffeeee");
    // root.style.setProperty("--bg-gradient-end", "#dddddd");
    // root.style.setProperty("--main-background-color", "var(--main-background-test)");
  }

  //# Card animation
  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 10000);
  }

  //# Loads workItems array from issues populated in ...getInitial */
  componentWillMount() {
    let workItems = [];
    this.props.issues.forEach(i => {
      workItems.push({
        id: i.id,
        number: i.number,
        title: i.title,
        state: i.state,
        body: i.body
      });
    });

    this.state.openItems = workItems.filter(x => x.state === "open").map(y => y.title);
    this.state.closedItems = workItems.filter(x => x.state === "closed").map(y => y.title);
  }

  //#
  static async getInitialProps() {
    //# grab all open GitHub items for this project
    let issues = [];
    // const URL = `https://api.github.com/repos/webpropopuli/next_blog/issues?state=all&authorization_request=0825eed296598a76e3b8557754d6bb233708b126
    // `;
    const URL = `https://api.github.com/repos/webpropopuli/next_blog/issues?state=all&client-id=process.env.GIT_CLIENT_ID&client_secret=fbb3e7384fcb0a38c8b25a4f55e8c36cc8385b45
    `;
    try {
      const resp = await axios.get(URL, {});
      issues = resp.data;
    } catch (er) {
      console.log(er);
    }

    return { issues };
  }

  render() {
    //const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;

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
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> David Marlowe </h2>
                        <div className="hero-section-content-intro">Writes code, drinks coffee, loves dogs.</div>
                      </div>
                      <img alt="David pic" className="image" src="/static/images/david-and-pals.jpg" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> David Marlowe </h2>
                        <div className="hero-section-content-intro">Writes code, drinks coffee, loves dogs.</div>
                      </div>
                      <img alt="David pic" className="image" src="/static/images/david-and-pals-rev.jpg" />
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
                    I'm a fullstack developer, former C warrior (I grok pointers) and soon-to-be ex-website designer -
                    I'm bad at colors.
                  </p>
                  <p>This site is React, Express and NextJS and I'm working on it daily so check back often.</p>
                  <button onClick={this.changeTheme}>Change theme (test)</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <Row>
          <Col>
            <Container>
              <p className="progress-hdr">
                Blog Progress
                <span className="git-txt">
                  <a href="https://github.com/webpropopuli/next_blog/issues"> (live data from GitHub issues)</a>
                </span>
              </p>
              <br />
              <div className="typed-container">
                <p className="typed-section">What's next for this site?</p>
                <Typed
                  loop
                  typeSpeed={40}
                  backSpeed={10}
                  strings={this.state.openItems}
                  backDelay={1400}
                  fadeOut={true}
                  fadeOutDelay={100}
                  className="my-typed"
                />
              </div>
              <div className="typed-container">
                <p className="typed-section">Recent changes:</p>
                <Typed
                  loop
                  typeSpeed={40}
                  backSpeed={10}
                  strings={this.state.closedItems}
                  backDelay={1500}
                  fadeOut={true}
                  fadeOutDelay={100}
                  className="my-typed"
                />
              </div>{" "}
            </Container>
          </Col>
        </Row>
      </BaseLayout>
    );
  }
}

export default Index;
