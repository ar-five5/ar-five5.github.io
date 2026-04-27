import { BGPattern } from "@/components/ui/bg-pattern";

export function BackgroundPaths() {
  return (
    <BGPattern
      variant="grid"
      mask="fade-edges"
      fill="#333333"
      size={32}
      className="fixed z-0"
    />
  );
}
