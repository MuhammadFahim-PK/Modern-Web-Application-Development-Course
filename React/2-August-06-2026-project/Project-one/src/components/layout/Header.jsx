import { useState } from 'react';
import Icon from '../ui/Icon';
import ThemeToggle from '../ui/ThemeToggle';

const links = ['Men', 'Women', 'Unisex', 'Oud', 'Collections'];

export default function Header({ dark, onThemeToggle }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/90 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-tertiary-container dark:bg-primary-container/90 dark:shadow-none">
      <div className="mx-auto flex w-full max-w-container-max flex-col px-margin-mobile md:px-margin-desktop">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="shrink-0 font-display-lg text-headline-md tracking-tight text-primary dark:text-primary-fixed">
            Aura &amp; Oud
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link, index) => (
              <a
                key={link}
                href="#"
                className={index === 0
                  ? 'border-b-2 border-primary pb-1 text-sm font-semibold uppercase tracking-wider text-primary dark:border-secondary-fixed dark:text-secondary-fixed'
                  : 'rounded px-2 py-1 text-sm uppercase tracking-wider text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary dark:text-on-tertiary-container dark:hover:bg-tertiary-container dark:hover:text-primary-fixed'}
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <button aria-label="Search" className="header-action"><Icon className="text-xl">search</Icon></button>
            <button aria-label="Language" className="header-action"><Icon className="text-xl">language</Icon></button>
            <button aria-label="Account" className="header-action"><Icon className="text-xl">person</Icon></button>
            <button aria-label="Favorites" className="header-action"><Icon className="text-xl">favorite</Icon></button>
            <button aria-label="Shopping bag" className="header-action"><Icon className="text-xl">shopping_bag</Icon></button>
            <ThemeToggle dark={dark} onToggle={onThemeToggle} />
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="header-action md:hidden"
            >
              <Icon>{open ? 'close' : 'menu'}</Icon>
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-2 border-t border-outline-variant/20 py-4 md:hidden">
            {links.map((link) => (
              <a key={link} href="#" className="px-2 py-2 text-sm uppercase tracking-wider text-on-surface-variant hover:text-primary dark:text-on-tertiary-container dark:hover:text-primary-fixed">
                {link}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
