import SectionHeading from '../ui/SectionHeading';
import { fragranceElements } from '../../data/content';

export default function FragranceElements() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <SectionHeading>The Elements</SectionHeading>
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <img alt="Fragrance Ingredients" className="h-auto w-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLsSOxFKdTRQymoHb7QOhIwifRoCddjFMqS7Q08R9auDuy3qphQgndKlxzPswGxwKKoOXkyhMllqOkOOX-ocWa5GjWYPI7hgWb9nqD6e7dYCVEiJ5zipYN-EPzCs-ryyDKtELcUFugq_-suTX39cs6M3XC-GeD66ThPBE5ppSXfF3_W35gS8HyhA-jlq6ug_X3WEVBl_OPHwLNm2WCFacmmSsVBhUwbdz-fVgpnlneGkXcSfZKVVSG4oIJHm" />
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {fragranceElements.map(([title, text]) => (
            <div key={title}>
              <h3 className="mb-3 font-display-lg text-2xl text-primary">{title}</h3>
              <p className="font-body-sm text-on-surface-variant">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
