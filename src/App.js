import "./App.css";
// import logo from "./logo.svg";
// import SimpleForm from "./components/chatbot.jsx";
import ChatbotNoBias from "components/ChatbotNoBias";
//import Result from "./result.jsx";

import 'semantic-ui-css/semantic.min.css'

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
        {/* <Result /> */}
        <ChatbotNoBias />
      </header>
    </div>
  );
}

export default App;
