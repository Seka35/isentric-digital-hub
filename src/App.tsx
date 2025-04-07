
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DigitalBanking from "./pages/DigitalBanking";
import About from "./pages/About";
import SMSSolutions from "./pages/SMSSolutions";
import WebBroadcasting from "./pages/WebBroadcasting";
import BulkBroadcastingAPI from "./pages/BulkBroadcastingAPI";
import ManagedService from "./pages/ManagedService";
import TwoWaySMS from "./pages/TwoWaySMS";
import ElectronicDirectMailing from "./pages/ElectronicDirectMailing";
import WhatsAppBusiness from "./pages/WhatsAppBusiness";
import RobolabChatbot from "./pages/RobolabChatbot";
import IntentBasedChatbot from "./pages/IntentBasedChatbot";
import LLMChatbot from "./pages/LLMChatbot";
import CallCentreSolutions from "./pages/CallCentreSolutions";
import BNPLSolution from "./pages/BNPLSolution";
import Cybersecurity from "./pages/Cybersecurity";
import AIServices from "./pages/AIServices";
import BlockchainServices from "./pages/BlockchainServices";
import Contact from "./pages/Contact";

// New pages
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import FraudPrevention from "./pages/FraudPrevention";
import MessagingSolutions from "./pages/MessagingSolutions";
import AIChatbots from "./pages/AIChatbots";
import DigitalWallets from "./pages/DigitalWallets";
import PaymentProcessing from "./pages/PaymentProcessing";
import CallCenterTools from "./pages/CallCenterTools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Solution Routes */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/messaging-solutions" element={<MessagingSolutions />} />
          <Route path="/solutions/ai-chatbots" element={<AIChatbots />} />
          <Route path="/solutions/digital-wallets" element={<DigitalWallets />} />
          <Route path="/solutions/payment-processing" element={<PaymentProcessing />} />
          <Route path="/solutions/call-center-tools" element={<CallCenterTools />} />
          
          {/* Product Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/digital-banking" element={<DigitalBanking />} />
          <Route path="/products/sms-solutions" element={<SMSSolutions />} />
          <Route path="/products/web-broadcasting" element={<WebBroadcasting />} />
          <Route path="/products/bulk-broadcasting-api" element={<BulkBroadcastingAPI />} />
          <Route path="/products/managed-service" element={<ManagedService />} />
          <Route path="/products/two-way-sms" element={<TwoWaySMS />} />
          <Route path="/products/electronic-direct-mailing" element={<ElectronicDirectMailing />} />
          <Route path="/products/whatsapp-business" element={<WhatsAppBusiness />} />
          <Route path="/products/robolab-chatbot" element={<RobolabChatbot />} />
          <Route path="/products/intent-based-chatbot" element={<IntentBasedChatbot />} />
          <Route path="/products/llm-chatbot" element={<LLMChatbot />} />
          <Route path="/products/call-centre-solutions" element={<CallCentreSolutions />} />
          <Route path="/products/bnpl-solution" element={<BNPLSolution />} />
          <Route path="/products/cybersecurity" element={<Cybersecurity />} />
          <Route path="/products/ai-services" element={<AIServices />} />
          <Route path="/products/blockchain-services" element={<BlockchainServices />} />
          <Route path="/products/fraud-prevention" element={<FraudPrevention />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
