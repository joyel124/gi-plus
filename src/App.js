import "./App.css";
import SignIn from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/Register";
import TableCrud from "./components/TableCrud";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Config from "./pages/Configuration";
import PasswordReset from "./pages/PasswordReset";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Gi Plus</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="table-crud" element={<TableCrud />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
        <Route path="configuration" element={<Config />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route path="/" element={<Navigate to="/sign-in" />} />
      </Routes>
    </div>
  );
}

export default App;
