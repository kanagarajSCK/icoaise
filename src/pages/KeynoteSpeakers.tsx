import { Prose, SectionTitle } from "@/components/ConferenceUI";

const speakers = [
  { name: "Dr. Matteo Anedda", affil: "University of Cagliari (UniCa), Italy." },
  { name: "Dr. Zubair Baig", affil: "Deakin University Geelong, Australia." },
  { name: "Dr. Alexandru TUGUI", affil: "“Al. I. Cuza” University, Iasi, Romania." },
  { name: "Dr. Fatima Zahra Fagroud", affil: "Université Hassan II de Casablanca, Morocco." },
];

const KeynoteSpeakers = () => (
  <>
    <title>Keynote Speakers — ICAIS 2027</title>
    <meta name="description" content="Distinguished keynote speakers at ICAIS 2027 — leading experts in AI and smart energy." />
    <SectionTitle>Keynote Speakers</SectionTitle>
    <Prose>
      <div className="grid sm:grid-cols-2 gap-6">
        {speakers.map((s) => (
          <article key={s.name} className="border border-border rounded-lg p-5 bg-muted/40">
            <h3 className="text-xl font-display text-conf-navy">{s.name}</h3>
            <p className="text-sm text-muted-foreground italic mt-1">{s.affil}</p>
          </article>
        ))}
      </div>
    </Prose>
  </>
);
export default KeynoteSpeakers;
