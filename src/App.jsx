import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <h1>Web Page and React JS</h1>
    <div id="welcome"></div>
    <div id="greet"></div>
    <div id="presentation"></div>
    <div id="click"></div>

    <div id="click-parameter"></div>
    <div id="change"></div>
    <script type="module" src="/src/main.jsx"></script>



      </header>
    </div>
  );
}

export default App;
