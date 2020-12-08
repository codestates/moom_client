import { Component } from "react";
import { withRouter } from "react-router-dom";

import BodyNav from "./BodyNav";

class CustomBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <BodyNav />
        <div>커스텀바디 컴포넌트 입니다.</div>
      </>
    );
  }
}

export default withRouter(CustomBody);
