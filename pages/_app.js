import React from "react";
import App, { Container } from "next/app";

// Import all our common CSS here >
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.scss";
import "../styles/globals.css";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
