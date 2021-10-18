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
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/details/:id">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
