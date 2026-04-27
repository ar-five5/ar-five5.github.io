export function BackgroundPaths() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "black",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px),
          radial-gradient(circle at 50% 60%, rgba(236,72,153,0.12) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)
        `,
        backgroundSize: "40px 40px, 40px 40px, 100% 100%",
      }}
    />
  );
}
