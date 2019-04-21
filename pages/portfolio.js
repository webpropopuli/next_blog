import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import { withRouter } from "next/router";

/* Get item id from props, then fetch and return that item. {query} is part of some odd param passed into getInitial... but I can't see what that is - though it looks mostly like path info. Ah...it's called 'context'. Ok then.
 */
class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    let item = {};
    try {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      item = resp.data;
    } catch (er) {
      console.log(er);
    }

    return { item };
  }

  render() {
    const { id, title, body } = this.props.item;
    return (
      <BaseLayout>
        <h1>
          {id}) {title}
        </h1>
        <p>{body} </p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
