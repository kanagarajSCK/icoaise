import { NavLink, Outlet } from "react-router-dom";
import heroImg from "@/assets/hero-jct.jpg";

const navItems = [
  { to: "/", label: "Home Page" },
  { to: "/call-for-papers", label: "Call for Papers" },
  { to: "/publication-info", label: "Publication Info" },
  { to: "/organizing-committee", label: "Organizing Committee" },
  { to: "/keynote-speakers", label: "Keynote Speakers" },
  { to: "/paper-submission", label: "Paper Submission" },
  { to: "/registration-info", label: "Registration Info" },
  { to: "/account-transfer", label: "Account Transfer" },
  { to: "/venue", label: "Venue" },
  { to: "/contact", label: "Contact us" },
];

const ConferenceLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 text-white">
          <div className="inline-block bg-white/95 px-4 py-1 rounded mb-6">
            <span className="font-display text-2xl tracking-widest text-conf-navy">
              IC<span className="relative">A<span className="absolute inset-0 flex items-center justify-center text-conf-pink">×</span></span>IS
            </span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl leading-tight text-white drop-shadow-lg">
            7<sup>th</sup> International Conference on
            <br />
            Artificial Intelligence and Smart Energy
            <br />
            (ICAIS 2027)
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/95 font-serif">
            11–12, January 2027 — Coimbatore, India
          </p>
        </div>
      </header>

      {/* Body: sidebar + content */}
      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
        <aside className="space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `flex items-center justify-between gap-2 px-5 py-2.5 rounded-full font-serif text-base transition-colors w-full text-right ${
                  isActive
                    ? "bg-conf-pink-hover text-white shadow-md"
                    : "bg-conf-pink text-white hover:bg-conf-pink-hover"
                }`
              }
            >
              <span className="flex-1 text-center">{item.label}</span>
              <span aria-hidden>⇒</span>
            </NavLink>
          ))}
        </aside>

        <section className="min-w-0">
          <Outlet />
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground font-serif">
        © 2027 ICAIS — JCT College of Engineering and Technology, Coimbatore, India
      </footer>
    </div>
  );
};

export default ConferenceLayout;
