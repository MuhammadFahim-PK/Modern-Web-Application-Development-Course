import Icon from '../ui/Icon';

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-container-max border-t border-outline-variant/30 px-margin-mobile py-16 md:px-margin-desktop">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display-lg text-3xl text-primary">Subscribe to our Newsletter</h3>
          <p className="mb-6 font-body-sm text-on-surface-variant">Receive the latest news, product launches, and exclusive offers directly to your inbox.</p>
          <form className="flex w-full max-w-md" onSubmit={(event) => event.preventDefault()}>
            <input className="min-w-0 flex-grow border border-outline-variant bg-transparent p-4 font-body-sm text-primary outline-none focus:border-primary" placeholder="Email Address" type="email" />
            <button className="bg-primary px-8 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-inverse-surface" type="submit">Join</button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3 lg:border-l lg:border-outline-variant/30 lg:pl-16">
          {[
            ['local_shipping', 'Complimentary Shipping', 'On all orders over $200.'],
            ['assignment_return', 'Free Returns', 'Within 30 days of purchase.'],
            ['verified', 'Guaranteed Authenticity', '100% authentic fragrances.'],
          ].map(([icon, title, text]) => (
            <div key={title} className="flex flex-col items-center">
              <Icon className="mb-4 text-4xl text-primary">{icon}</Icon>
              <h4 className="mb-2 font-label-caps text-label-caps uppercase tracking-widest text-primary">{title}</h4>
              <p className="font-body-sm text-on-surface-variant">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
