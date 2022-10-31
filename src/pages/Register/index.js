import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/signup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://gi-plus.joyel.me/">
        Gi-Plus
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const userRef = useRef();
  const errRef = useRef();

  const [firstname, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastname, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstname));
  }, [firstname]);

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastname));
  }, [lastname]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [firstname, lastname, email, password, matchPwd]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
    const v1 = USER_REGEX.test(firstname);
    const v2 = USER_REGEX.test(lastname);
    const v3 = EMAIL_REGEX.test(email);
    const v4 = PWD_REGEX.test(password);
    console.log({
      v1,
      v2,
      v3,
      v4,
    });
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ firstname, lastname, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setEmail("");
      setFirstName("");
      setLastName("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="/sign-in">Sign In</a>
          </p>
        </section>
      ) : (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="off"
                      name="firstName"
                      ref={userRef}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      value={firstname}
                      onFocus={() => setFirstNameFocus(true)}
                      onBlur={() => setFirstNameFocus(false)}
                      fullWidth
                      id="firstName"
                      label="First Name"
                      aria-invalid={validFirstName ? "false" : "true"}
                      //autoFocus
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validFirstName ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validFirstName || !firstname ? "hide" : "invalid"
                      }
                    />
                    <p
                      id="uidnote"
                      className={
                        firstNameFocus && firstname && !validFirstName
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      ref={userRef}
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastname}
                      onFocus={() => setLastNameFocus(true)}
                      onBlur={() => setLastNameFocus(false)}
                      aria-invalid={validLastName ? "false" : "true"}
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="off"
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validLastName ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validLastName || !lastname ? "hide" : "invalid"
                      }
                    />
                    <p
                      id="uidnote"
                      className={
                        lastNameFocus && lastname && !validLastName
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      onFocus={() => setEmailFocus(true)}
                      onBlur={() => setEmailFocus(false)}
                      aria-invalid={validEmail ? "false" : "true"}
                      label="Email Address"
                      name="email"
                      autoComplete="off"
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validEmail ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validEmail || !email ? "hide" : "invalid"}
                    />
                    <p
                      id="uidnote"
                      className={
                        emailFocus && email && !validEmail
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      <br />
                      Must include "@".
                      <br />
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      onChange={(e) => setPwd(e.target.value)}
                      value={password}
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="off"
                      aria-invalid={validPwd ? "false" : "true"}
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validPwd || !password ? "hide" : "invalid"}
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{" "}
                      <span aria-label="exclamation mark">!</span>{" "}
                      <span aria-label="at symbol">@</span>{" "}
                      <span aria-label="hashtag">#</span>{" "}
                      <span aria-label="dollar sign">$</span>{" "}
                      <span aria-label="percent">%</span>
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirm_password"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                      aria-invalid={validMatch ? "false" : "true"}
                      label="Confirm Password"
                      type="password"
                      id="confirm_password"
                      autoComplete="off"
                    />
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validMatch && matchPwd ? "valid" : "hide"}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={validMatch || !matchPwd ? "hide" : "invalid"}
                    />
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link href="/sign-in" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
