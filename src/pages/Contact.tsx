import { Prose, SectionTitle } from "@/components/ConferenceUI";

const Contact = () => (
  <>
    <title>Contact — ICAIS 2027</title>
    <meta
      name="description"
      content="Contact ICAIS 2027 conference secretariat — postal address, email and phone."
    />

    <SectionTitle>Contact</SectionTitle>

    <Prose>
      <p className="text-base sm:text-lg text-muted-foreground">
        We would like to hear from you. Feel free to contact us using any of the following methods:
      </p>

      <div className="grid sm:grid-cols-2 gap-6 my-10">
        
        {/* Address Box */}
        <div className="group border border-border rounded-xl p-6 bg-muted/40 shadow-sm 
                        transition-all duration-300 ease-in-out 
                        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
          
          <h3 className="font-display text-xl sm:text-2xl mb-4 text-conf-navy 
                         transition-colors duration-300 group-hover:text-blue-600">
            Postal Address
          </h3>

          <div className="space-y-1 text-sm sm:text-base leading-relaxed text-gray-700">
            <p className="font-medium">
              7th International Conference on Artificial Intelligence and Smart Energy (ICAIS 2027)
            </p>
            <p>JCT College of Engineering and Technology</p>
            <p>Pichanur Road, Off NH 47</p>
            <p>Pichanur, Coimbatore</p>
            <p>Tamil Nadu, India – 641105</p>
          </div>
        </div>

        {/* Contact Box */}
        <div className="group border border-border rounded-xl p-6 bg-muted/40 shadow-sm 
                        transition-all duration-300 ease-in-out 
                        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">

          <h3 className="font-display text-xl sm:text-2xl mb-4 text-conf-navy 
                         transition-colors duration-300 group-hover:text-blue-600">
            Get in Touch
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-gray-700">

            <p>
              <span className="font-semibold">Email:</span><br />
              <a
                className="conf-link transition-colors duration-300 hover:text-blue-600"
                href="mailto:conf.icaisee@gmail.com"
              >
                conf.icaisee@gmail.com
              </a>
            </p>

            <p>
              <span className="font-semibold">Mobile:</span><br />
              +91-8754818524
            </p>

            <p>
              <span className="font-semibold">Website:</span><br />
              <a
                className="conf-link transition-colors duration-300 hover:text-blue-600"
                href="https://icaise.in/2027/"
                target="_blank"
                rel="noreferrer"
              >
                ICAIS 2027 Official Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </Prose>
  </>
);

export default Contact;