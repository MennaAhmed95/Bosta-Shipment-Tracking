import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/index";
import Routes from "./routes/routes";

function App() {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default App;
