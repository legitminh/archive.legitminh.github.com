import Image from "next/image";

export type LogoProps = {
  alt?: string;
  size?: number;
  className?: string;
};

export default function Logo({
  alt = "Icon for Minh",
  size = 24,
  className = "",
}: LogoProps) {
  return (
    <div className={`p-2 bg-slate-100 rounded-full ${className}`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo/minh-icon.svg`}
        alt={alt}
        width={size - 8}
        height={size - 8}
      />
    </div>
  );
}
