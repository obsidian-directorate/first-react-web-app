import './App.css';
import Counter from './resources/Counter';
import WelcomeMessage from './resources/WelcomeMessage';

function App() {
  const username = "Hieu10";
  
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeMessage name={username} />
        <Counter />
      </header>
    </div>
  );
}

export default App;
