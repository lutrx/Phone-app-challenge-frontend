import './App.css';
import { Route, Routes } from "react-router-dom";
import Phones from "./pages/Phones";
import OnePhone from "./pages/OnePhone";

function App() {
  return (
    <div className='master'>
      <div>
        <Phones />
      </div>
      <div>
        <Routes>
          <Route path="/:id" element={<OnePhone />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
