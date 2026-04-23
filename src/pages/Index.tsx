import { DateBlock, Prose, SectionTitle } from "@/components/ConferenceUI";
import affiliatedBy1 from "@/assets/Affiliatedby1.png";
import affiliatedBy2 from "@/assets/Affiliatedby2.png";
import affiliatedBy3 from "@/assets/Affiliatedby3.png";
import affiliatedBy4 from "@/assets/Affiliatedby4.png";
import affiliatedBy5 from "@/assets/Affiliatedby5.png";
import affiliatedBy6 from "@/assets/Affiliatedby6.png";
import affiliatedBy7 from "@/assets/Affiliatedby7.png";
import organizedByImage from "@/assets/Organized by.png";
import technicalSponsors1 from "@/assets/TechnicalSponsors1.png";
import technicalSponsors2 from "@/assets/TechnicalSponsors2.png";

const affiliatedByLogos = [
  affiliatedBy1,
  affiliatedBy2,
  affiliatedBy3,
  affiliatedBy4,
  affiliatedBy5,
  affiliatedBy6,
  affiliatedBy7,
];

const Index = () => {
  return (
    <>
      <title>ICAIS 2027 Ã¢â‚¬â€ 7th International Conference on AI and Smart Energy</title>
      <meta name="description" content="ICAIS 2027 Ã¢â‚¬â€ 7th International Conference on Artificial Intelligence and Smart Energy, 11Ã¢â‚¬â€œ12 January 2027, Coimbatore, India." />

      <div className="flex justify-center mb-8">
        <span className="bg-conf-online text-white font-serif px-5 py-1.5 rounded-full text-sm shadow">
          Online Event
        </span>
      </div>

      <div className="text-center font-serif text-conf-navy space-y-5 mb-12">
        <div>
          <p className="text-lg mb-1">ICAIS 2025 proceedings</p>
          <p>
            <a className="conf-link" href="https://link.springer.com/book/10.1007/978-3-031-90478-3" target="_blank" rel="noreferrer">Volume - 1 (PUBLISHED)</a>
            <span className="bg-conf-pink text-white text-xs px-2 py-0.5 rounded-full ml-2">new</span>
          </p>
          <p>
            <a className="conf-link" href="https://link.springer.com/book/10.1007/978-3-031-90482-0" target="_blank" rel="noreferrer">Volume - 2 (PUBLISHED)</a>
            <span className="bg-conf-pink text-white text-xs px-2 py-0.5 rounded-full ml-2">new</span>
          </p>
        </div>
        <div>
          <p className="text-lg mb-1">ICAIS 2026 proceedings</p>
          <p>
            <a className="conf-link" href="https://link.springer.com/book/9783032235435" target="_blank" rel="noreferrer">Volume - 1 (PUBLISHED)</a>
            <span className="bg-conf-pink text-white text-xs px-2 py-0.5 rounded-full ml-2">new</span>
          </p>
          <p>
            <a className="conf-link" href="https://link.springer.com/book/9783032235466" target="_blank" rel="noreferrer">Volume - 2 (PUBLISHED)</a>
            <span className="bg-conf-pink text-white text-xs px-2 py-0.5 rounded-full ml-2">new</span>
          </p>
        </div>
      </div>

      <div className="bg-conf-panel text-white p-8 mb-10">
        <h3 style={{ color: "white" }} className="text-center font-display text-2xl mb-6">Technical Sponsors</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-200 rounded p-4 flex items-center justify-center min-h-[180px]">
            <img
              src={technicalSponsors1}
              alt="Technical Sponsor 1"
              className="max-h-28 w-full object-contain"
            />
          </div>
          <div className="bg-gray-200 rounded p-4 flex items-center justify-center min-h-[180px]">
            <img
              src={technicalSponsors2}
              alt="Technical Sponsor 2"
              className="max-h-28 w-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-12">
        <a href="/paper-submission" className="bg-conf-online hover:bg-conf-link text-white font-serif px-8 py-3 rounded shadow-md transition-colors">
          Submit Manuscript
        </a>
      </div>

      <div className="text-center font-serif text-conf-navy mb-10">
        <p className="font-display text-xl mb-2">Organized by</p>
        <div className="bg-white border border-border rounded p-4 inline-block">
          <img
            src={organizedByImage}
            alt="Organized by"
            className="max-w-full h-auto object-contain"
          />
        </div>
        <p className="mt-4 text-conf-violet font-display">Department of EEE</p>
        <p className="font-bold">JCT College of Engineering and Technology</p>
        <p>Coimbatore, India</p>
      </div>

      <div className="border-t border-border pt-8 mb-12">
        <p className="text-center italic font-serif text-conf-navy mb-4">Affiliated by</p>
        <div className="flex flex-wrap justify-center gap-4">
          {affiliatedByLogos.map((logo, index) => (
            <div
              key={logo}
              className="w-20 h-20 rounded-full overflow-hidden bg-white border border-border shadow-sm flex items-center justify-center p-2"
            >
              <img
                src={logo}
                alt={`Affiliated by ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <DateBlock label="Full Paper Submission Deadline" date="7 November, 2026" />
        <DateBlock label="Acceptance Intimation" date="11 November, 2026" />
        <DateBlock label="Registration Deadline" date="9 December, 2026" />
        <DateBlock label="Conference Dates" date="11–12, January 2027" />
      </div>

      <SectionTitle>Conference Info</SectionTitle>
      <Prose>
        <p>
          Recent years have witnessed the evolution of Artificial Intelligence [AI] techniques like deep learning, machine learning, pattern recognition, Natural language processing [NLP], and computer vision and their revolutionary applications in the emerging smart city and industrial automation applications. In this scenario, AI provides smart and efficient tools for smart energy systems to perform smart electricity generation, emergency response, and delivery. The integration of renewable energy sources into the smart grid is made easier by using Artificial intelligence technologies. Meanwhile, Machine Learning the subset of Artificial intelligence provides some security and privacy assessment tools to the evolving smart energy grids. As Artificial Intelligence [AI] techniques are still remaining in the initial stage to revolutionize the way we generate, transmit and consume the energy in the smart city and industrial infrastructure. It is clearly known that the integration of AI in smart energy models will deliver a wide range of potential research opportunities to the smart energy management community. The main goal of the 7th International Conference on Artificial Intelligence and Smart Energy [ICAIS 2027] organized by Department of EEE, JCT College of Engineering and Technology, Coimbatore, Tamilnadu, India on 11Ã¢â‚¬â€œ12, January 2027 is to propose, share and exchange innovative Artificial Intelligence [AI] solutions to enhance the efficiency, stability, robustness, and security of smart energy systems.
        </p>
      </Prose>

      <div className="mt-12">
        <SectionTitle>College Info</SectionTitle>
        <Prose>
          <p>
            JCT COLLEGE OF ENGINEERING AND TECHNOLOGY Ã¢â‚¬â€ Shri Jagannath Educational Health and Charitable Trust was established by renowned and philanthropic people with an objective of providing education to all especially the down trodden and rural population. Considering the growing demands for technical education in the country the trust has started an engineering college namely JCT College of Engineering and Technology in Pichanur in Coimbatore for the academic year 2009Ã¢â‚¬â€œ10. The College is located at Pichanur at the foothills of the Western Ghats in a serene, eco friendly lush green environment. It is well connected by road, rail and air. The Management strives hard to enhance the professional knowledge, skills and attitudes of educators, so that they might in turn improve the learning process of students. The college aims at developing a deep understanding of the human values and social concerns among the engineering graduates.
          </p>
        </Prose>
      </div>

      <div className="mt-12">
        <SectionTitle>Department of EEE</SectionTitle>
        <Prose>
          <p>
            The Department of EEE was established in 2010. It offers Undergraduate programme in BE Electrical and Electronics Engineering and also runs prominent Postgraduate programme in ME Power Electronics and Drives, which started from year 2012. In 2018, it achieved the milestone of getting NBA Accreditation. The faculty of this Department elude excellent commitment, and they possess high qualification credentials to provide technical education of utmost standards. The students are offered with Innovative Workshops, Guest lectures, Webinars, National and International Conferences, informative Industrial visits, etc. on a regular basis, to keep them updated with the latest trends in the Electrical and Electronics Engineering. Along with Highly equipped Laboratories, Industry sponsored research labs are also functioning to support innovative project works.
          </p>
        </Prose>
      </div>
    </>
  );
};

export default Index;
