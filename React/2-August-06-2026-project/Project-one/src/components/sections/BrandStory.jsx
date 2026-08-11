export default function BrandStory() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <img alt="The Art of Oud" className="h-auto w-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLv-VXYcnaGuYj8LG9tgJoTrFWeqqOlXK3zdbEG48PneXbhLaiff4e3KpDLmSFmrF4i96Ewa-xGGpeCchgv-VS3Hds0FrIu1AdipaAqabWNp3A7apgV4RVTEZVPEJZLwvdATyluwPLj3Hz61Yw6VvL7FFv8mWKsgOH0kYHQbGPvGHOMe_8u1GQZOdVD_lkEQKZ75NLF4rusnQF8eroEEngxY_45OcZkt-kLaGjnrm8t8I5TTK_Ljhh-B3Ik" />
        </div>
        <div className="order-1 flex flex-col justify-center md:order-2">
          <h2 className="mb-6 font-display-lg text-headline-md text-primary">The Art of Oud</h2>
          <p className="mb-6 font-body-lg text-on-surface-variant">Centuries of Heritage refined for the modern connoisseur. Each bottle of Aura &amp; Oud is a testament to the meticulous craftsmanship and profound respect for the rarest ingredients found in nature.</p>
          <p className="mb-8 font-body-lg text-on-surface-variant">Our master perfumers blend tradition with innovation, creating olfactory masterpieces that resonate with the soul.</p>
          <a href="#" className="self-start border-b border-primary pb-1 font-label-caps text-label-caps uppercase tracking-widest text-primary transition-colors hover:border-secondary hover:text-secondary">Discover Our Heritage</a>
        </div>
      </div>
    </section>
  );
}
