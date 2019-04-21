import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

import { Button, Container } from "reactstrap";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: `(home page)` };
  }

  render() {
    return (
      <BaseLayout>
        <Container>
          <Button color="danger">Change me</Button>
        </Container>
      </BaseLayout>
    );
  }
}

export default Index;
