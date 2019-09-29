import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import Loading from "./Loading";

function App({ loading }) {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">
          {loading ? (
            <Loading />
          ) : (
              <Switch>
                <Route path="/authors/:authorID" component={AuthorDetail} />
                <Route path="/authors" component={AuthorsList} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />



                <Redirect to="/authors" />
              </Switch>
            )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.rootAuthors.loading || state.rootBooks.loading
});

export default connect(mapStateToProps)(App);
