import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux"
// import { login, signup, logout } from "./redux/actions"

// Logo
import logo from "./assets/theindex.svg";
import Logout from "./Logout";

class Sidebar extends Component {


  render() {
    return (
      <div id="sidebar">
        <img src={logo} className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <NavLink to="/authors">AUTHORS</NavLink>
          </h4>
        </section>
        <div className="fixed-bottom">

          {this.props.user ? <Logout /> : <>
            <Link to="/login" className="btn btn-info m-2 float-left">
              Login
          </Link>
            <Link to="/signup" className="btn btn-success m-2 float-left">
              Signup
          </Link>
          </>}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Sidebar);
