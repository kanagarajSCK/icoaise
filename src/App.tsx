import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ConferenceLayout from "./components/ConferenceLayout";
import Index from "./pages/Index.tsx";
import CallForPapers from "./pages/CallForPapers.tsx";
import PublicationInfo from "./pages/PublicationInfo.tsx";
import OrganizingCommittee from "./pages/OrganizingCommittee.tsx";
import KeynoteSpeakers from "./pages/KeynoteSpeakers.tsx";
import PaperSubmission from "./pages/PaperSubmission.tsx";
import RegistrationInfo from "./pages/RegistrationInfo.tsx";
import AccountTransfer from "./pages/AccountTransfer.tsx";
import Venue from "./pages/Venue.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<ConferenceLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/publication-info" element={<PublicationInfo />} />
            <Route path="/organizing-committee" element={<OrganizingCommittee />} />
            <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
            <Route path="/paper-submission" element={<PaperSubmission />} />
            <Route path="/registration-info" element={<RegistrationInfo />} />
            <Route path="/account-transfer" element={<AccountTransfer />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
