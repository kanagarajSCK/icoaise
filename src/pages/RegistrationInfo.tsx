import { Prose, SectionTitle } from "@/components/ConferenceUI";

const RegistrationInfo = () => (
  <>
    <title>Registration — ICAIS 2027</title>
    <meta name="description" content="ICAIS 2027 registration guidelines, procedure and fees for Indian and Foreign authors and listeners." />
    <SectionTitle>Registration</SectionTitle>
    <Prose>
      <h3 className="text-xl mt-2 mb-3 font-display text-conf-navy">Registration Guidelines</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>If you are an author of one or more accepted papers, please read the instructions below carefully to make payment and submit the final documents.</li>
        <li>The registration fees once paid are not refundable.</li>
      </ul>

      <h3 className="text-xl mt-6 mb-3 font-display text-conf-navy">Registration Procedure</h3>
      <p>ICAIS 2027 is an international conference event. In order to determine which registration fee you need to pay, please follow the instructions given below.</p>

      <p className="mt-4"><strong>1) If you are a presenting author of any article accepted for “Oral Presentation” at JCT College:</strong></p>
      <p>You need to register and submit your final paper and copyright along with the payment screenshot to the conference email <a className="conf-link" href="mailto:conf.icaisee@gmail.com">(conf.icaisee@gmail.com)</a> within the registration deadline mentioned in the conference homepage; after the deadline your paper will not be considered further in the conference.</p>
      <p>Your paper will be included in ICAIS 2027 Conference Proceedings.</p>
      <p>It has to be mainly noted that one registration covers the conference presentation and publication of one research article. Corresponding author of an article should make the registration to the conference.</p>

      <p className="mt-4"><strong>2) If you are a listener in ICAIS 2027:</strong></p>
      <p>You need to send your interest to attend the conference event to the conference email <a className="conf-link" href="mailto:conf.icaisee@gmail.com">(conf.icaisee@gmail.com)</a>.</p>
      <p>You can listen to all the presentations on all the days of the conference event along with the keynote/plenary talks delivered by experts from both academia and industries.</p>

      <h3 className="text-xl mt-8 mb-3 font-display text-conf-navy">Registration Option</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border">
          <thead className="bg-muted">
            <tr>
              <th className="border border-border p-3 text-left">Category</th>
              <th className="border border-border p-3 text-left">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-border p-3">Indian Author</td><td className="border border-border p-3">9,750 INR</td></tr>
            <tr><td className="border border-border p-3">Indian Listener</td><td className="border border-border p-3">7,750 INR</td></tr>
            <tr><td className="border border-border p-3">Foreign Author</td><td className="border border-border p-3">130 USD</td></tr>
            <tr><td className="border border-border p-3">Foreign Listener</td><td className="border border-border p-3">100 USD</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 italic">Remember that one registration can cover one paper presentation and publication.</p>

      <h3 className="text-xl mt-6 mb-3 font-display text-conf-navy">Full registration includes</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Access to ICAIS 2027 online material: ICAIS 2027 Conference Proceedings.</li>
        <li>Admission to ICAIS 2027 Opening / Closing Ceremonies.</li>
        <li>Access to all ICAIS 2027 sessions (including keynote talks).</li>
        <li>Onsite conference material.</li>
      </ul>

      <h3 className="text-xl mt-8 mb-3 font-display text-conf-navy">Publication Ethics</h3>
      <p>ICAIS 2027 is committed to the highest standards of publishing integrity and academic honesty.</p>
      <p>Serious misconduct (for example, data duplication, falsification or plagiarism) is taken seriously. If misconduct is proven, sanctions will be applied. (Applies to post-conference plagiarism also).</p>

      <p className="mt-6">Registration deadline: <span className="text-conf-violet font-semibold">9 December 2026</span></p>
    </Prose>
  </>
);
export default RegistrationInfo;
