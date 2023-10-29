import { Dicom } from './dicom-parser/Dicom';
import { Route, Routes } from 'react-router';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dicom></Dicom>}></Route>
        <Route path="/dicom" element={<Dicom></Dicom>}></Route>
      </Routes>
    </div>
  );
}

export default App;
