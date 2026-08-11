import Icon from '../ui/Icon';

const columnOne = ['Customer Service', 'Shipping & Returns', 'About Us'];
const columnTwo = ['Privacy Policy', 'Contact', 'Store Locator'];

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest dark:border-on-tertiary-container/10 dark:bg-tertiary-container">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-stack-lg px-margin-mobile py-stack-lg md:grid-cols-4 md:px-margin-desktop">
        <div className="flex flex-col gap-4">
          <h4 className="mb-4 font-display-lg text-headline-md text-primary dark:text-primary-fixed">Aura &amp; Oud</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-tertiary-container">© 2024 Aura &amp; Oud. All Rights Reserved. Crafted for Connoisseurs.</p>
        </div>
        <div className="flex flex-col gap-4">
          {columnOne.map((link, index) => (
            <a key={link} href="#" className={`${index === 0 ? 'text-primary underline decoration-secondary' : 'text-on-surface-variant'} font-body-sm uppercase tracking-wider transition-all hover:text-primary hover:underline dark:text-on-tertiary-container dark:hover:text-primary-fixed`}>{link}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {columnTwo.map((link) => (
            <a key={link} href="#" className="font-body-sm uppercase tracking-wider text-on-surface-variant transition-all hover:text-primary hover:underline dark:text-on-tertiary-container dark:hover:text-primary-fixed">{link}</a>
          ))}
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="mb-4 flex gap-4">
            <a href="#" aria-label="Share" className="text-on-surface-variant hover:text-primary"><Icon>share</Icon></a>
          </div>
          <button type="button" className="flex items-center gap-2 border border-outline-variant px-4 py-2 text-sm font-label-caps uppercase tracking-widest transition-colors hover:bg-surface-container-low">
            <Icon className="text-sm">language</Icon>
            EN / AR
          </button>
        </div>
      </div>
    </footer>
  );
}
