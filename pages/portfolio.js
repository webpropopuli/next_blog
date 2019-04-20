import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";

class Portfolio extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>{this.props.router.query.id}</h1>
        <p>{this.props.router.query.data} </p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
