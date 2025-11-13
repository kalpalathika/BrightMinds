import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { HowWeHelpSection } from './components/sections/HowWeHelpSection';
import { VoicesOfChangeSection } from './components/sections/VoicesOfChangeSection';
import { VolunteerSection } from './components/sections/VolunteerSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowWeHelpSection />
        <VoicesOfChangeSection />
        <VolunteerSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
