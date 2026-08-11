import Icon from './Icon';

export default function ThemeToggle({ dark, onToggle }) {
  return (
    <button
      type="button"
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={dark}
      onClick={onToggle}
      className="rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-primary"
    >
      <Icon className="text-xl">{dark ? 'light_mode' : 'dark_mode'}</Icon>
    </button>
  );
}
