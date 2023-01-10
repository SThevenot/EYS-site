/** @format */
import HomePage from "./pages/HomePage";
import Members from "./pages/Members";
import UpcomingEvents from "./pages/UpcomingEvents";
import ContactUs from "./pages/ContactUs";
import NavTab from "./components/NavTab";
import Footer from "./components/Footer";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavTab pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/members" element={<Members />}></Route>
        <Route
          exact
          path="/upcoming-events"
          element={<UpcomingEvents />}
        ></Route>
        <Route exact path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
      <section id="footerSection">
        <Footer />
      </section>
    </Router>
  );
}

export default App;
