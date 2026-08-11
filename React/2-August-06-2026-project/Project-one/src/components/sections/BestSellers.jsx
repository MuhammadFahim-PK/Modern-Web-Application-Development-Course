import SectionHeading from '../ui/SectionHeading';
import { products } from '../../data/content';

export default function BestSellers() {
  return (
    <section className="mx-auto max-w-container-max bg-surface-container-lowest px-margin-mobile py-16 md:px-margin-desktop">
      <SectionHeading>Best Sellers</SectionHeading>
      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group flex flex-col">
            <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-surface-container-low">
              <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-0 w-full translate-y-4 px-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <button type="button" className="w-full bg-primary py-3 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-inverse-surface">
                  Add to Bag
                </button>
              </div>
            </div>
            <h3 className="text-center font-display-lg text-lg text-primary">{product.name}</h3>
            <p className="mt-1 text-center font-body-sm text-on-surface-variant">{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
