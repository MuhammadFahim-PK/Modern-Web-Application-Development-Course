import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import { reviews } from '../../data/content';

export default function CustomerReviews() {
  return (
    <section className="border-t border-outline-variant/20 bg-surface-container-lowest px-margin-mobile py-24 md:px-margin-desktop">
      <div className="mx-auto max-w-container-max">
        <SectionHeading>Connoisseurs' Verdict</SectionHeading>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {reviews.map(([text, name]) => (
            <article key={name} className="flex flex-col items-center text-center md:items-start md:text-left">
              <div className="mb-4 flex text-secondary">
                {[1, 2, 3, 4, 5].map((star) => <Icon key={star} filled>star</Icon>)}
              </div>
              <p className="mb-6 font-body-lg italic text-primary">"{text}"</p>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">— {name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
