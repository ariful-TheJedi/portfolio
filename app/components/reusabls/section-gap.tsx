interface SectionGapProps {
  size?: "sm" | "md" | "lg" | "xl";
}

export default function SectionGap({
  size = "lg",
}: SectionGapProps) {
  const gapSize = {
    sm: "h-12 md:h-16",
    md: "h-16 md:h-24",
    lg: "h-24 md:h-32",
    xl: "h-32 md:h-40",
  };

  return (
    <div
      aria-hidden="true"
      className={`w-full ${gapSize[size]}`}
    />
  );
}