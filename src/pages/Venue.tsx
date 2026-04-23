import { Prose, SectionTitle } from "@/components/ConferenceUI";

const Venue = () => (
  <>
    <title>Venue — ICAIS 2027</title>
    <meta name="description" content="ICAIS 2027 venue: JCT College of Engineering and Technology, Pichanur, Coimbatore, Tamil Nadu, India." />
    <SectionTitle>Organized by</SectionTitle>
    <Prose>
      <h3 className="text-2xl mt-2 mb-3 font-display text-conf-navy">JCT College of Engineering and Technology</h3>
      <p>Pichanur Road, Off NH 47,</p>
      <p>Pichanur, Coimbatore,</p>
      <p>Tamil Nadu, India – 641105</p>

      <div className="mt-6 overflow-hidden border border-border">
        <iframe
          title="JCT College of Engineering and Technology — Map"
          src="https://www.google.com/maps?q=JCT+College+of+Engineering+and+Technology,+Pichanur,+Coimbatore&output=embed"
          width="100%"
          height="360"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </div>

      <p className="mt-6">
        <a
          className="conf-link"
          href="https://www.google.com/maps/search/Hotels/@10.8370613,76.8518257,13.31z"
          target="_blank"
          rel="noreferrer"
        >
          › View Nearby Hotels
        </a>
      </p>
    </Prose>
  </>
);
export default Venue;
