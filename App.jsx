import { Routes, Route, Link } from "react-router-dom";
import VotingPage from "./pages/votingpage";
import ResultsPage from "./pages/Resultspage";
import "./index.css"

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <nav>
        <Link to="/">Voting Page</Link> |{" "}
        <Link to="/results">Results Page</Link>
      </nav>

      <Routes>
        <Route path="/" element={<VotingPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  );
}

export default App;
