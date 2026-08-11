export default function SectionHeading({ children }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="font-display-lg text-headline-md text-primary mb-4">{children}</h2>
      <div className="mx-auto h-px w-12 bg-primary" />
    </div>
  );
}
