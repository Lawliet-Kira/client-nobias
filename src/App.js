import "./App.css";
// import logo from "./logo.svg";
// import SimpleForm from "./chatbot.jsx";
import Result from "./pages/Result/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          No Bias!
        </a> */}
        {/* <SimpleForm /> */}
        <Result />
      </header>
    </div>
  );
}

export default App;
