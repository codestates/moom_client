import React, { Component } from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import NoLoginNav from "../components/NoLoginNav";
import Introduce from "../components/Introduce";
import Description from "../components/Description";
import Experience from "../components/Experience";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import UserStore from "../store/store";

import "../css/NoLoginMain.css";

class NoLoginMain extends Component {
  // 비로그인시 페인 페이지
  render() {
    return (
      <div>
        <NoLoginNav />
        <div className="nologin-main">
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <>
                    <UserStore>
                      <div>
                        <Introduce />
                      </div>
                      <div>
                        <Description />
                      </div>
                      <Experience />
                    </UserStore>
                  </>
                );
              }}
            ></Route>
            <Route
              path="/login"
              render={() => {
                return (
                  <LoginPage
                    handleLoginSuccess={this.props.handleLoginSuccess}
                  />
                );
              }}
            ></Route>
            <Route
              path="/signup"
              render={() => {
                return <SignupPage />;
              }}
            ></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(NoLoginMain);
