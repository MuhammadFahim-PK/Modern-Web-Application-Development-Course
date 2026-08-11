export default function Icon({ children, filled = false, className = '' }) {
  return (
    <span className={`material-symbols-outlined ${filled ? 'filled-icon' : ''} ${className}`}>
      {children}
    </span>
  );
}
