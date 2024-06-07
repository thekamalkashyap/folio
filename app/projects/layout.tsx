export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-white via-zinc-600/20 to-white">
      {children}
    </div>
  );
}
