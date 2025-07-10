import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import SoundHealing from "@/pages/services/SoundHealing";
import CrystalHealing from "@/pages/services/CrystalHealing";
import LifeCoaching from "@/pages/services/LifeCoaching";
import FingerprintAnalysis from "@/pages/services/FingerprintAnalysis";
import CounselingTherapy from "@/pages/services/CounselingTherapy";
import Numerology from "@/pages/services/Numerology";
import DoterraOils from "@/pages/services/DoterraOils";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/sound-healing" component={SoundHealing} />
      <Route path="/services/crystal-healing" component={CrystalHealing} />
      <Route path="/services/life-coaching" component={LifeCoaching} />
      <Route path="/services/fingerprint-analysis" component={FingerprintAnalysis} />
      <Route path="/services/counseling-therapy" component={CounselingTherapy} />
      <Route path="/services/numerology" component={Numerology} />
      <Route path="/services/doterra-oils" component={DoterraOils} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
