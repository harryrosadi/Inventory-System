import React, { Component } from "react";
import { Menu } from "../../component";
import logo from "../../image/avatar11066402_1.png";
import "./navbar.css";
// import Swal from "sweetalert2";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkActivePage = (checkPage) => {
    const page = this.props.page;
    if (checkPage === page) return "active";
    return "";
  };

  checkLogin = () => {
    // const { loginStatus, goToPage } = this.props;
    return (
      <Link to="/productList">
        <div
          activePage={this.checkActivePage("productList")}
          // redirect={() =>
          //   loginStatus
          //     ? goToPage("productList")
          //     : Swal.fire(
          //         "Kijang Satu ganti",
          //         "Penyusup, bukan Admin Banteng",
          //         "error"
          //       )
          // }
        >
          ProductList
        </div>
      </Link>
    );
  };

  checkLogout = () => {
    const { loginStatus, changeStatus } = this.props;
    if (loginStatus)
      return (
        <>
          <Link to="/labaRugi">
            <div>Laba Rugi</div>
          </Link>
          <Link to="/login">
            <div redirect={() => changeStatus(false, "Home")}>Logout</div>
          </Link>
        </>
      );
    return (
      <Link to="/login">
        <Menu
          isActivePage={this.checkActivePage("login")}
          // redirect={() => goToPage("login")}
        >
          Login
        </Menu>
      </Link>
    );
  };
  // redirectPage = () => {
  //   this.props.goToPage("Home");
  // };
  render() {
    // const { goToPage } = this.props;
    return (
      <>
        <div className="topnav">
          <Link to="/home">
            <div
              className="logo"
              activePage={this.checkActivePage("home")}
              // onClick={() => goToPage("home")}
            >
              <span>
                <img src={logo} alt="logo" />
              </span>
              Tokopedei
            </div>
          </Link>

          <div className="topnav-right">
            <Link to="/home">
              <div
              // activePage={this.checkActivePage("home")}
              // redirect={() => goToPage("home")}
              >
                Home
              </div>
            </Link>
            <Link to="/about">
              <div
              // activePage={this.checkActivePage("about")}
              // redirect={() => goToPage("about")}
              >
                About
              </div>
            </Link>
            {this.checkLogin()}

            {/* <Menu
              activePage={this.checkActivePage("AddForm")}
              redirect={() => goToPage("AddForm")}
            >
              Add Form
            </Menu> */}

            {this.checkLogout()}
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
