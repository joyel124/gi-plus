import "./App.css";
import SignIn from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/Register";
import TableCrud from "./components/TableCrud";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Config from "./pages/Configuration";
import PasswordReset from "./pages/PasswordReset";
import { Helmet } from "react-helmet";
import StatusMaintenance from "./pages/Maintenance";
import Status404 from "./pages/Error404";
import Status500 from "./pages/Error500";
import StatusComingSoon from "./pages/ComingSoon";
import TableCrudV2 from "./components/TableCrudV2";
import ClientList from "./pages/Lists/Client";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Gi Plus</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <Routes>
        <Route path="client-list" element={<ClientList />} />
        <Route path="table-crud-v2" element={<TableCrudV2 />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="error-404" element={<Status404 />} />
        <Route path="error-500" element={<Status500 />} />
        <Route path="maintenance" element={<StatusMaintenance />} />
        <Route path="coming-soon" element={<StatusComingSoon />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="table-crud" element={<TableCrud />} />
        <Route path="home" element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="configuration" element={<Config />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route path="/" element={<Navigate to="/sign-in" />} />
      </Routes>
    </div>
  );
}

export default App;
