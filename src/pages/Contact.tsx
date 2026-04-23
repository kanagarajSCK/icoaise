import { Prose, SectionTitle } from "@/components/ConferenceUI";

const Contact = () => (
  <>
    <title>Contact — ICAIS 2027</title>
    <meta name="description" content="Contact ICAIS 2027 conference secretariat — postal address, email and phone." />
    <SectionTitle>Contact</SectionTitle>
    <Prose>
      <p>We would like to hear from you; feel free to contact us using any of the following means:</p>

      <div className="grid sm:grid-cols-2 gap-6 my-8">
        <div className="border border-border rounded-lg p-5 bg-muted/40">
          <h3 className="font-display text-xl mb-2 text-conf-navy">Postal Address</h3>
          <p>7th International Conference on Artificial Intelligence and Smart Energy (ICAIS 2027)</p>
          <p>JCT College of Engineering and Technology,</p>
          <p>Pichanur Road, Off NH 47,</p>
          <p>Pichanur, Coimbatore,</p>
          <p>Tamil Nadu, India – 641105.</p>
        </div>
        <div className="border border-border rounded-lg p-5 bg-muted/40">
          <h3 className="font-display text-xl mb-2 text-conf-navy">Get in Touch</h3>
          <p><strong>ICAISE 2027 Email:</strong><br /><a className="conf-link" href="mailto:conf.icaisee@gmail.com">conf.icaisee@gmail.com</a></p>
          <p className="mt-3"><strong>ICAISE 2027 Mobile Number:</strong><br />+91-8754818524</p>
          <p className="mt-3"><strong>Website:</strong><br /><a className="conf-link" href="https://icaise.in/2027/" target="_blank" rel="noreferrer">7th International Conference on Artificial Intelligence and Smart Energy (ICAIS 2027)</a></p>
        </div>
      </div>
    </Prose>
  </>
);
export default Contact;
