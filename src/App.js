import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Quiz />
    </div>
  );
}

export default App;
