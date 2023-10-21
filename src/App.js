
import '@/App.css';
import '@/App.scss';
import Home from '@/pages/Home';
import Apropos from '@/pages/Apropos';
import Logement from '@/pages/Logement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from '@/_utils/Error';
import Layout from '@/pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route element={<Layout/>}>
            <Route index element={<Home />} />

            <Route path="/home" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/logement" element={<Logement />} />

            <Route path="*" element={<Error />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
