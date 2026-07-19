import logoAsset from "@/assets/logo-faz-consorcio.png.asset.json";

interface LogoProps {
  alt?: string;
  className?: string;
  width?: number;
}

export function Logo({
  alt = "Faz Consórcio",
  className = "",
  width = 200,
}: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      width={width}
      className={`h-auto object-contain ${className}`}
      loading="eager"
    />
  );
}
