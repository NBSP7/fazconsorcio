import logoAsset from "@/assets/logo-faz-consorcio.png.asset.json";

interface LogoProps {
  alt?: string;
  className?: string;
  size?: number;
}

export function Logo({
  alt = "Faz Consórcio",
  className = "",
  size = 56,
}: LogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      loading="eager"
    />
  );
}
