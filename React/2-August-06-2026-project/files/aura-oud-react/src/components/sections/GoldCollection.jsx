export default function GoldCollection() {
  return (
    <section className="bg-surface-container-low px-margin-mobile py-section-gap md:px-margin-desktop">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 font-display-lg text-headline-md text-primary">The Gold Collection</h2>
          <p className="mb-8 font-body-lg text-on-surface-variant">An exploration of luminescence and shadow. The Gold Collection contrasts the profound depth of nocturnal oud with the brilliant clarity of morning elixirs. A duality captured in exquisite glass, designed to command presence.</p>
          <a href="#" className="self-start bg-primary px-8 py-4 text-center font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-inverse-surface">Explore Collection</a>
        </div>
        <div>
          <img alt="The Gold Collection" className="h-auto w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDVZY_fx7Dcw_fD13LWAR69xHjJujYjvyKV2udB_m7lKmEsNKE-UYPcDGAm6LVQC4WOf5DNm-WWdDOJZsyuOpMk0Shmm5tPlwNDFKo1aUksGpC3Gci5_sCnTagBkJJqR46dLSuvIp92T-Ksi5XiTO-AiYnie4SIcXFzHiznFHok-Lo5uxYDOuMHf-N47pUBTZjCQueskpHpLe-Hiln0cvREAQZkjdl4hzh0BxWkAVtZi-vxRENWV1VEw" />
        </div>
      </div>
    </section>
  );
}
