import SectionHeading from '../ui/SectionHeading';
import { collections } from '../../data/content';

export default function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <SectionHeading>Curated Collections</SectionHeading>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {collections.map((item) => (
          <a key={item.title} href="#" className={`group relative block h-[600px] overflow-hidden ${item.className}`}>
            <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
            <div className="absolute bottom-8 left-8">
              <h3 className="mb-2 font-display-lg text-headline-md text-on-primary">{item.title}</h3>
              <span className="flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-all group-hover:gap-4">
                Explore <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
