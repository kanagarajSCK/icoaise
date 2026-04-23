import { Prose, SectionTitle } from "@/components/ConferenceUI";

const Group = ({ title, members }: { title: string; members: string[] }) => (
  <div className="mb-8">
    <h3 className="text-2xl mb-3 font-display text-conf-navy">{title}</h3>
    <ul className="space-y-2">
      {members.map((m) => (
        <li key={m} className="text-conf-navy">{m}</li>
      ))}
    </ul>
  </div>
);

const OrganizingCommittee = () => (
  <>
    <title>Conference Committee — ICAIS 2027</title>
    <meta name="description" content="ICAIS 2027 organising committee, technical program chairs, advisory committee and program committee members." />
    <SectionTitle>Conference Committee</SectionTitle>
    <Prose>
      <Group title="Chief Patron" members={[
        "Mr. R. Arulselvan, Chairman, JCT College of Engineering and Technology, Coimbatore, India.",
      ]} />
      <Group title="Patron" members={[
        "Dr. S. Manoharan, Principal, JCT College of Engineering and Technology, Coimbatore, India.",
      ]} />
      <Group title="Organising Chair" members={[
        "Dr. B Balraj, HoD/EEE, JCT College of Engineering and Technology, Coimbatore, India.",
      ]} />
      <Group title="Technical Program Chairs" members={[
        "Dr. Alexandru TUGUI, “Al. I. Cuza” University, Iasi, Romania.",
        "Dr. Isidoros Perikos, University of Patras, Greece.",
        "Dr. Zubair Baig, Deakin University Geelong, Australia.",
        "Dr. Fatima Zahra Fagroud, Université Hassan II de Casablanca, Morocco.",
        "Dr. Amit Kumar, Department of EEE, University of Cagliari, Italy.",
        "Dr. B. Balraj, JCT College of Engineering and Technology, Coimbatore, India.",
        "Prof. Habil. Dr. Eng. Valentina Emilia Balas, “Aurel Vlaicu” University of Arad, Romania.",
      ]} />
      <Group title="Advisory Committee" members={[
        "Dr. T. Justin Jose, Dean-Research, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. Alaboudi, Shaqra University, Saudi Arabia.",
        "Dr. Arunava Chatterjee, Meghnad Saha Institute of Technology, India.",
        "Dr. Ashish Mishra, Lakshmi Narain College of Technology, India.",
        "Dr. Pradeepa P., Vice Rector, Sambhram University, Jizzakh, Uzbekistan.",
        "Prof. Gianluca Gatto, Department of EEE, University of Cagliari, Italy.",
      ]} />
      <Group title="Technical Program Committee — International" members={[
        "Dr. Ching Yern Chee, University of Malaya, Malaysia.",
        "Dr. Arijit Karati, National Sun Yat-sen University, Taiwan.",
        "Dr. Sunday Ayoola OKE, University of Lagos, Nigeria.",
        "Prof. Dr. Alaa Hussein Al-Hamami, British University of Bahrain SAAR, Bahrain.",
        "Dr. Noureddine Bouhmala, University of Southeast, Horten.",
        "Dr. Rustem Popa, University of Galati, Romania.",
        "Dr. João Tavares, University of Porto, Portugal.",
        "Dr. Ahmed Yahya, Al-Azhar University, Egypt.",
        "Dr. Ravishankar Sharma, Systems, University of Canterbury, New Zealand.",
        "Dr. Altab Hossain, Military Institute of Science & Technology, Bangladesh.",
        "Dr. Aries Susanty, Diponegoro University, Indonesia.",
        "Dr. Ali Dorri, University of New South Wales, Australia.",
        "Dr. Santhosh P, Department of EEE, University of Cagliari, Italy.",
        "Dr. Suganthi R, Department of EEE, University of Cagliari, Italy.",
      ]} />
      <Group title="Technical Program Committee — National" members={[
        "Dr. A. Nalini, M.G.R Educational & Research Institute, India.",
        "Dr. M. Kalpana, Academy of Research and Education, India.",
        "Dr. Monika Shah, NIRMA University, India.",
        "Dr. P. Aruna Jeyanthy, Kalasalingam University, India.",
        "Dr. Harpreet Kaur, Punjabi University, India.",
        "Dr. Shafiqul Abidin, Aligarh Muslim University, India.",
        "Dr. C. Bharatiraja, SRM Institute of Science and Technology, India.",
        "Dr. Narayanan K., SASTRA University, India.",
        "Dr. S. V. Viraktamath, SDM College of Engineering & Technology, India.",
        "Dr. Arvind Kumar Pandey, Meerut Institute of Engineering and Technology, India.",
        "Dr. S. Balakrishnan, Sri Krishna College of Engineering and Technology, India.",
        "Dr. Arumugam Manoharan, Chennai Institute of Technology, India.",
        "Dr. Athul Jayaram, Amity University, India.",
        "Dr. Ashish Kumar, Indian Institute of Technology, India.",
      ]} />
      <Group title="Local Organising Committee" members={[
        "Dr. V. Jethose, HoD/AI&DS, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. G. Gnanavel, HoD/BTBC, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. V. Murugesh, HoD/CIVIL, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. K. Malarvizhi, HoD/CSBS, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. S. Zulaikha Beevi, HoD/CSE, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. V. J Arulkarthick, HoD/ECE, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. P. Balamurugan, HoD/FT, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. G. Magesh, HoD/MECH, JCT College of Engineering and Technology, Coimbatore, India.",
        "Dr. S. Kavitha, HoD/PCT, JCT College of Engineering and Technology, Coimbatore, India.",
      ]} />
    </Prose>
  </>
);
export default OrganizingCommittee;
