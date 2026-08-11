export default function Hero() {
  return (
    <section className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden bg-tertiary">
      <div className="absolute inset-0 z-0">
        <img alt="Echoes of the Orient" className="h-full w-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmiRfoMg3bhnXcCm1BeUrTQ5wBW6dkvVlU5jd07ZKtp8T4yZUriyKcnukwh76J6NYpKi2Bh7hwpxtbfPzeFzBFpoKo-KI8RziqaTbZQCzeh8xDLHzVcGoNWJhPIVP-qixtD0GWBFOwVwSpvquYoNeeR6IAO4uvNWKYfssz5dsPTQCxqyReL4SvWQQ_AEvYmvyti2JjPY1plr89Hax8Rqd5iYeWqXSLg8e9XRq9L9zs9Yi0p8yHuM2LQ" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-margin-mobile text-center md:px-margin-desktop">
        <h1 className="mb-stack-md font-display-lg text-display-lg-mobile text-on-primary md:text-display-lg">Echoes of the Orient</h1>
        <p className="mb-stack-lg max-w-2xl font-body-lg text-body-lg text-inverse-on-surface">Discover a symphony of rare ingredients, meticulously blended to evoke the timeless mystique of the East. A journey in every drop.</p>
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a href="#" className="border border-primary-container bg-primary-container px-8 py-4 text-center font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-surface-variant hover:text-primary">Shop Fragrances</a>
          <a href="#" className="border border-on-primary bg-transparent px-8 py-4 text-center font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-on-primary hover:text-primary">Discover Your Scent</a>
        </div>
      </div>
    </section>
  );
}
