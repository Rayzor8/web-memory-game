import Form from './components/formLogin/Form';
import { Routes, Route } from 'react-router-dom';
import MemoryGame from './components/game/MemoryGame';
import FormContextProvider from './context/FormContext';

function App() {
   return (
      <FormContextProvider>
         <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/game" element={<MemoryGame />} />
         </Routes>
      </FormContextProvider>
   );
}

export default App;
