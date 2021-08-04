import React, { Component } from "react";
import "./login.css";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    console.log(`email : `, username);
    console.log(`password : `, password);

    const { user } = this.props.isLoggedIn;
    console.log("cek user", user);
    for (let index = 0; index < user.length; index++) {
      //   const element = user[index];

      if (
        username === user[index]["username"] &&
        password === user[index]["password"]
      ) {
        user
          .filter((users) => (users.username = username))
          .map((filter) => {
            return filter;
          });
        this.setState({
          username: "",
          password: "",
        });
        console.log();
        //   this.props.changeStat(true, "productList");
        return Swal.fire("Yeahh...", "Login is success!", "success");
      } else {
        return Swal.fire("Opss...", "Login is gagal!", "error");
      }
    }
  };

  render() {
    const { username, password } = this.state;
    console.log("isi logged in :", this.props.isLoggedIn);
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <div className="form">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <Typography className="title" variant="h4">
              Sign in
            </Typography>
            <form className="form" onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="username"
                autoComplete="email"
                autoFocus
                value={username}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {/* <Link to="/productList"> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign In
              </Button>
              {/* </Link> */}

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <Box mt={8}>{/* <Copyright /> */}</Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.Auth,
});

const mapDispatchToProps = (dispatch) => ({
  doLogin: () => dispatch({ type: "LOGIN" }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
