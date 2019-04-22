import react from "react";
import Header from "../shared/Header";

const BaseLayout = props => {
  const { classname, children } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${classname}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
