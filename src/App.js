import './App.css';
import WelcomeMessage from './WelcomeMessage';

function App() {
  const username = "Hieu10";
  
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage name={username} />
      </header>
    </div>
  );
}

export default App;
