type BgBlurProps = {
  imagePath: string;
  blur?: string;
  overlay?: string;
};

export default function BgBlur({
  imagePath,
  blur = "blur-2xl",
  overlay = "bg-black/25",
}: BgBlurProps) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-background">
      {/* Background Image */}
      <div
        className={`
          absolute inset-0 
          bg-cover bg-center 
          scale-125
          ${blur}
        `}
        style={{
          backgroundImage: `url('${imagePath}')`,
          maskImage: `
            radial-gradient(
              ellipse 118% 46% at 50% 50%,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.97) 38%,
              rgba(0,0,0,0.85) 52%,
              rgba(0,0,0,0.55) 67%,
              rgba(0,0,0,0.22) 80%,
              transparent 92%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ellipse 118% 46% at 50% 50%,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.97) 38%,
              rgba(0,0,0,0.85) 52%,
              rgba(0,0,0,0.55) 67%,
              rgba(0,0,0,0.22) 80%,
              transparent 92%
            )
          `,
        }}
      />

      {/* Atmosphere overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Top fade - kept reasonably soft */}
      <div className="absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-background to-transparent" />

      {/* Bottom fade - much smaller area as requested */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}