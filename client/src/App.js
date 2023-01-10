/** @format */
import HomePage from "./pages/HomePage";
import Members from "./pages/Members";
import UpcomingEvents from "./pages/UpcomingEvents";
import ContactUs from "./pages/ContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
