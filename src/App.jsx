import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Contact from './pages/Contact';
import Rodo from './pages/Rodo';
import Offer from './pages/Offer';
import About from './pages/About';
import Study from './pages/Study';
import Sensory from './pages/Sensory';
import Standards from './pages/Standards';
import CranialTherapy from './pages/offer/CranialTherapy';
import Neuroflow from './pages/offer/Neuroflow';
import Corrective from './pages/offer/Corrective';
import HandTherapy from './pages/offer/HandTherapy';
import SpeechTherapy from './pages/offer/SpeechTherapy';
import Pricing from './pages/offer/Pricing';
import Home from './pages/Home';
import { MainLayout } from './pages/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/o-nas" element={<About />} />
      <Route path="/o-nas/standardy-ochrony-maloletnich" element={<Standards />} />
      <Route path="/oferta" element={<Offer />} />
      <Route path="/oferta/terapia-kregoslupa" element={<CranialTherapy />} />
      <Route path="/oferta/trening-neuroflow" element={<Neuroflow />} />
      <Route path="/oferta/korektywa" element={<Corrective />} />
      <Route path="/oferta/terapia-dloni" element={<HandTherapy />} />
      <Route path="/oferta/logopedia" element={<SpeechTherapy />} />
      <Route path="/oferta/cennik" element={<Pricing />} />
      <Route path="/oferta/intergacja-sensoryczna" element={<Study />} />
      <Route path="/oferta/trening-umiejetnosci-spolecznych" element={<Sensory />} />
      <Route path="/kontakt" element={<Contact />} />
      <Route path="/rodo" element={<Rodo />} />
      <Route path="*" element={<Home />} />
      {/* <Route path="/classes" element={<Classes />} /> */}
      {/* <Route path="/galeria" element={<Gallery />} /> */}
      {/* <Route path="/office" element={<Office />} /> */}
      {/* <Route path="/therapy" element={<Therapy />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
