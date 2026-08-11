import SectionHeading from '../ui/SectionHeading';
import { journal } from '../../data/content';

export default function Journal() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <SectionHeading>The Journal</SectionHeading>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {journal.map(([category, title, text]) => (
          <a key={title} href="#" className="group block">
            <div className="mb-6 aspect-[4/3] overflow-hidden bg-surface-container-low" />
            <p className="mb-2 font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">{category}</p>
            <h3 className="mb-3 font-display-lg text-2xl text-primary transition-colors group-hover:text-secondary">{title}</h3>
            <p className="font-body-sm text-on-surface-variant">{text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
