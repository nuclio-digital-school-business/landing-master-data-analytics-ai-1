import { FormModalProvider } from './context/FormModalContext';
import useScrollReveal from './hooks/useScrollReveal';
import Header from './components/Header';
import RailForm from './components/RailForm';
import Hero from './components/Hero';
import Docentes from './components/Docentes';
import Stats from './components/Stats';
import Why from './components/Why';
import Mercado from './components/Mercado';
import Boost from './components/Boost';
import Empleo from './components/Empleo';
import Trust from './components/Trust';
import Testimonios from './components/Testimonios';
import Signup from './components/Signup';
import Footer from './components/Footer';
import FormModal from './components/FormModal';

export default function App() {
  useScrollReveal();

  return (
    <FormModalProvider>
      <Header />
      <RailForm />
      <Hero />
      <Docentes />
      <Stats />
      <Why />
      <Mercado />
      <Boost />
      <Empleo />
      <Trust />
      <Testimonios />
      <Signup />
      <Footer />
      <FormModal />
    </FormModalProvider>
  );
}