import Form from './components/Form';
import { Routes, Route, Link } from "react-router-dom";
import MemoryGame from './components/game/MemoryGame';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/game" element={<MemoryGame />} />
      </Routes>
    </div>
  );
}

export default App;
