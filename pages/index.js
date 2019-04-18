import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

//import SuperComp from "../components/super";
class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: `(home page)` };
    console.log(`constructor`);
  }

  componentWillMount() {
    console.log(`WillMount`);
  }
  componentDidMount() {
    console.log(`DidMount`);
  }

  chgTitle = () => {
    return this.setState({ title: `(egap emoh)` });
  };

  render() {
    console.log(`preRender`);
    const { title } = this.state;
    return (
      <BaseLayout>
        <h1>{title}</h1>
        <button onClick={this.chgTitle}>Change me</button>
      </BaseLayout>
    );
  }
}

export default Index;
