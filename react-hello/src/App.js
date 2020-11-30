import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1> Hello React.</h1>
      <h2> It is {new Date().toLocaleTimeString()}. </h2>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
