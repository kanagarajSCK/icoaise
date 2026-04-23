import { Prose, SectionTitle } from "@/components/ConferenceUI";

const PublicationInfo = () => (
  <>
    <title>Publication — ICAIS 2027</title>
    <meta name="description" content="Publication details for ICAIS 2027 conference proceedings." />
    <SectionTitle>Publication</SectionTitle>
    <Prose>
      <p>Publication details to be updated...</p>

      <h3 className="text-2xl mt-8 mb-3 font-display">Past Proceedings</h3>
      <ul className="space-y-2">
        <li><a className="conf-link" href="https://link.springer.com/book/10.1007/978-3-031-90478-3" target="_blank" rel="noreferrer">ICAIS 2025 — Volume 1 (Springer, Published)</a></li>
        <li><a className="conf-link" href="https://link.springer.com/book/10.1007/978-3-031-90482-0" target="_blank" rel="noreferrer">ICAIS 2025 — Volume 2 (Springer, Published)</a></li>
        <li><a className="conf-link" href="https://link.springer.com/book/9783032235435" target="_blank" rel="noreferrer">ICAIS 2026 — Volume 1 (Springer, Published)</a></li>
        <li><a className="conf-link" href="https://link.springer.com/book/9783032235466" target="_blank" rel="noreferrer">ICAIS 2026 — Volume 2 (Springer, Published)</a></li>
      </ul>
    </Prose>
  </>
);
export default PublicationInfo;
