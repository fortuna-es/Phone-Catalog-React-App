import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import PhoneListContainer from "./containers/PhoneListContainer";
import PhoneDetailComponent from "./containers/PhoneDetailComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route />
          <Route path="/" exact element={<PhoneListContainer />} />
          <Route
            path="/phone/:phoneId"
            exact
            element={<PhoneDetailComponent />}
          />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
