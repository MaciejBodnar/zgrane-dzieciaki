import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Contact from './pages/Contact';
import Rodo from './pages/Rodo';
import Offer from './pages/Offer';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Study from './pages/Study';
import Sensory from './pages/Sensory';
import Standards from './pages/Standards';
import Office from './pages/Office';
import Classes from './pages/Classes';
import Therapy from './pages/Therapy';
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
      <Route path="about" element={<About />} />
      <Route path="offer" element={<Offer />} />
      <Route path="offer/cranial-therapy" element={<CranialTherapy />} />
      <Route path="offer/neuroflow" element={<Neuroflow />} />
      <Route path="offer/corrective" element={<Corrective />} />
      <Route path="offer/hand-therapy" element={<HandTherapy />} />
      <Route path="offer/speech-therapy" element={<SpeechTherapy />} />
      <Route path="offer/pricing" element={<Pricing />} />
      <Route path="/offer/study" element={<Study />} />
      <Route path="/offer/sensory" element={<Sensory />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="contact" element={<Contact />} />
      <Route path="rodo" element={<Rodo />} />
      <Route path="study" element={<Study />} />
      <Route path="sensory" element={<Sensory />} />
      <Route path="standards" element={<Standards />} />
      <Route path="office" element={<Office />} />
      <Route path="classes" element={<Classes />} />
      <Route path="therapy" element={<Therapy />} />
      <Route path="/about/standards" element={<Standards />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
