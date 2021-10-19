import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import Register from "./pages/Register/Register";
import Header from "./pages/Shared/Header";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer";
import Services from "./pages/Home/Services/Services";
import ServiceDetails from "./pages/Home/ServiceDetails/ServiceDetails";
import Contact from "./pages/Contact/Contact";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import Doctors from "./pages/Doctors/Doctors";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/details/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
