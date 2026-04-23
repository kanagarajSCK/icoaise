import { Prose, SectionTitle } from "@/components/ConferenceUI";

const PaperSubmission = () => (
  <>
    <title>Submission — ICAIS 2027</title>
    <meta name="description" content="Submission guidelines for ICAIS 2027 — paper format, content rules, conversion to PDF, citations and submission email." />
    <SectionTitle>Submission</SectionTitle>
    <Prose>
      <h3 className="text-2xl mt-2 mb-3 font-display">Submission Guidelines for ICAIS 2027</h3>
      <p>Please read our author guidelines carefully before submitting your paper.</p>

      <h4 className="text-xl mt-6 mb-2 font-display text-conf-navy">Preparing your paper</h4>
      <p>Paper templates will be updated soon...</p>
      <p>It is important to ensure that when you submit your paper, it is in the correct format, and has been thoroughly proofread. Papers not in the appropriate paper and format will not be forwarded to the review process, so please ensure that your paper has been checked for errors.</p>
      <p>As a general rule we would advise that an author does not submit more than two articles to ICAIS 2027 conference. This includes papers that the same author has co-authored.</p>

      <h4 className="text-xl mt-6 mb-2 font-display text-conf-navy">Paper format</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>The paper size should be standard A4.</li>
        <li>No page numbers, headers or footers should be included within the paper.</li>
        <li>Text is single spaced, not double spaced.</li>
        <li>All pages are portrait (landscape pages should be rotated).</li>
        <li>Paper layout should be given in single column.</li>
      </ul>

      <h4 className="text-xl mt-6 mb-2 font-display text-conf-navy">Paper content</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>The paper includes the author name(s) and affiliation(s) (full address including country and Email Address).</li>
        <li>All articles must contain an abstract (limited to 250 words).</li>
        <li>All figures and tables should be numbered in numerical order. Please ensure figure/table numbers are not duplicated or missed.</li>
        <li>Figures are legible and placed within the text.</li>
        <li>Section headings should be numbered, ensure they are numbered numerically and no numbers are duplicated or missing.</li>
        <li>Displayed equations should follow a naming convention in numerical order, i.e. (1), (2), (3) etc.</li>
        <li>Reference style should be the same for all the references.</li>
        <li>Ensure that all references are cited in the text and that all citations have a corresponding reference.</li>
        <li>Finally, please ensure the paper is thoroughly proofread to check the standard of English and ensure wording is clear and concise.</li>
      </ul>

      <h4 className="text-xl mt-6 mb-2 font-display text-conf-navy">Conversion to PDF</h4>
      <ul className="list-disc list-inside space-y-1">
        <li>The PDF file should be editable and not password protected.</li>
        <li>The PDF is free of formatting errors (e.g. corrupt equations, missing or poor-resolution figures), since conversion from Word to PDF can introduce formatting errors.</li>
        <li>There are no blank pages added at the first or last.</li>
      </ul>

      <h4 className="text-xl mt-6 mb-2 font-display text-conf-navy">Cite any published work in your paper</h4>
      <p>References mentioned in the conference papers should include: Author(s); Title of the paper; Year of publication; Journal/conference name. Follow the MLA, APA, or Chicago Style Formatting (these formats are available in Google Scholar).</p>

      <h4 className="text-xl mt-6 mb-2 font-display text-conf-navy">Copyright Permissions</h4>
      <p>Figures published on the internet are usually copyrighted and will require permission for re-use, unless the author/owner has made explicit that the image is freely available. If there is an image that you find and would like to use, always check the source and whether or not you need to ask for permission to reuse it. If you cannot find this information, it’s best to look for a different image, as we will not be able to republish it. If an image requires credit for re-use, that can be included in your figure caption as a citation and the information should be mentioned in references.</p>

      <h4 className="text-xl mt-6 mb-2 font-display text-conf-navy">Submission</h4>
      <p>The final prepared paper should be submitted via Email to <a className="conf-link" href="mailto:conf.icaisee@gmail.com">conf.icaisee@gmail.com</a> indicating the Email Subject as <em>“New Manuscript Submission”</em>.</p>

      <div className="my-8 flex justify-center">
        <a href="mailto:conf.icaisee@gmail.com?subject=New%20Manuscript%20Submission" className="bg-conf-online hover:bg-conf-link text-white px-8 py-3 rounded shadow font-serif transition-colors">
          Submit Manuscript
        </a>
      </div>
      <p className="text-center text-conf-violet font-display">Deadline: 7 November 2026</p>
    </Prose>
  </>
);
export default PaperSubmission;
