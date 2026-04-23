import { Prose, SectionTitle } from "@/components/ConferenceUI";

const track1 = [
  "AI optimization of energy grids with advanced information systems",
  "Data Driven Smart grid technologies and applications",
  "Blockchain-based energy trading and transaction management",
  "Cloud-based platforms for energy management and optimization",
  "Big data analytics for energy consumption patterns, forecasting, and demand response",
  "Digital and Multimedia systems for energy systems monitoring and visualization",
  "Computer networks and IoT for energy infrastructure connectivity",
  "Cybersecurity and privacy considerations in energy information systems",
  "Software engineering methodologies for energy management applications",
];

const track2 = [
  "AI-powered energy consumption forecasting and demand response management",
  "Machine learning for energy optimization in buildings and industrial facilities",
  "Deep learning for anomaly detection, fault diagnosis, and predictive maintenance",
  "Natural language processing for energy-related information retrieval and analysis",
  "Computer vision for industrial monitoring and asset management",
  "Reinforcement learning for energy control and optimization",
  "Autonomous robotics for infrastructure maintenance and inspection",
  "Human-computer interaction for developing smart and user-friendly interfaces",
  "Integration of AI and information systems for sustainable and resilient energy solutions",
];

const CallForPapers = () => (
  <>
    <title>Call for Papers — ICAIS 2027</title>
    <meta name="description" content="ICAIS 2027 invites original research papers on AI, smart energy, and information systems. Submission deadline 7 November 2026." />
    <SectionTitle>Call for Paper</SectionTitle>
    <Prose>
      <p>
        ICAIS 2027 invites researchers, practitioners, and industry experts to submit original, high-quality research articles that contribute to the intersection of artificial intelligence, smart energy, and information systems. The conference aims to enable research collaboration, and the exchange of innovative ideas to address the pressing challenges and opportunities in this rapidly evolving field.
      </p>

      <h3 className="text-2xl mt-8 mb-3 font-display">Track 1: Intelligent Energy Systems and Information Technology</h3>
      <ul className="list-disc list-inside space-y-1">
        {track1.map((t) => <li key={t}>{t}</li>)}
      </ul>

      <h3 className="text-2xl mt-8 mb-3 font-display">Track 2: AI Applications in Energy Management and Information Systems</h3>
      <ul className="list-disc list-inside space-y-1">
        {track2.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </Prose>
  </>
);
export default CallForPapers;
