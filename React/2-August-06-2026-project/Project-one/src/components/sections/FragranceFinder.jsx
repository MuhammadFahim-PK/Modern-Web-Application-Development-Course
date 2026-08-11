export default function FragranceFinder() {
  return (
    <section className="relative overflow-hidden bg-tertiary py-section-gap">
      <div className="absolute inset-0 z-0">
        <img alt="Amber resin and glowing incense smoke" className="h-full w-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdrwNU5_Z4mbWUePFaGiwdkrL3GjQ20QkFSMClfhhGQ7Kp9Mj1yqYr7eJ1usB5knBeZIHi6ou0JaoN-HyOf-vcgIMGtWY51P_PKgh-Kr_0pHZxauSxbFXVlF6HZ92b9c1yFNcEXjs5D6JFDAPOyECUAte5ViEVR6qOWfiT496-VseBSpUM5rpyIK9kIA-FExXFNrhojtwuoYzhomYvCNF3xguwircheprno21sLuasOeCFduwL8bCRwg" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="mb-6 font-display-lg text-headline-md text-on-primary">Find Your Signature</h2>
        <p className="mb-8 font-body-lg text-inverse-on-surface">Embark on a sensory journey to find the scent that defines you.</p>
        <a href="#" className="border border-on-primary bg-transparent px-10 py-4 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-on-primary hover:text-primary">Take the Scent Quiz</a>
      </div>
    </section>
  );
}
