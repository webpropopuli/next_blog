import react from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";
import { Row, Col, Button, Container } from "reactstrap";

class Git extends react.Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    let items = [];
    const URL = "https://api.github.com/repos/webpropopuli/next_blog/issues?state=all";
    try {
      const resp = await axios.get(URL, {});
      items = resp.data;
      debugger;
    } catch (er) {
      console.log(er);
    }

    return { items: items.splice(0, 10) }; // grab first 10 only
  }

  renderItems(items) {
    return items.map(i => {
      console.log(i.title, i.id, i.body, i.number);
      return (
        <li key={i.number}>
          <Link as={`/git/${i.number}`} href={`/git?id=${i.number}`}>
            <a>{i.title}</a>
          </Link>
        </li>
      );
    });
  }

  render() {
    const { items } = this.props;

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

export default Git;
