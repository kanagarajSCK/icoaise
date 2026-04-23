import { ReactNode } from "react";

export const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="conf-section-title mb-8 mt-4">{children}</h2>
);

export const Prose = ({ children }: { children: ReactNode }) => (
  <div className="font-serif text-conf-navy text-justify leading-relaxed space-y-4 [&_a]:conf-link">
    {children}
  </div>
);

export const DateBlock = ({ label, date }: { label: string; date: string }) => (
  <div className="mb-5">
    <div className="conf-date-label font-display">{label}</div>
    <div className="text-conf-navy font-serif">{date}</div>
  </div>
);
