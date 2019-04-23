import react from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import { Row, Col, Button, Container } from "reactstrap";

class Portfolio extends react.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    let items = [];
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      items = resp.data;
    } catch (er) {
      console.log(er);
    }

    return { items: items.splice(0, 10) }; // grab first 10 only
  }

  /*
  <Link as=... gives us a clean URL (e.g. '/portfolio/3' instead of some godawful '/portfolio/this-is-stupid-long-and-hideous')
  */
  renderItems(items) {
    return items.map(i => {
      return (
        <li key={i.id}>
          <Link as={`/portfolio/${i.id}`} href={`/portfolio?id=${i.id}`}>
            <a>{i.title}</a>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { items } = this.props;
    debugger;
    return (
      <BaseLayout className="cover">
        <Container>
          <Row>
            <h1>Some of My Projects</h1>
            <ul>{this.renderItems(items)}</ul>
          </Row>
        </Container>
      </BaseLayout>
    );
  }
}

export default Portfolio;
