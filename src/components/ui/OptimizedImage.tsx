import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type OptimizedImageProps = Omit<ImageProps, "fill"> & {
  /** Görselin tamamını göstermek için contain; hero gibi alanlar için cover */
  fit?: "contain" | "cover";
  frameClassName?: string;
};

/**
 * Federasyon görselleri — gereksiz kırpmayı azaltır.
 * Portrait/karma görsellerde contain, geniş bannerlarda cover kullanın.
 */
export function OptimizedImage({
  fit = "contain",
  frameClassName,
  className,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-surface-elevated/80 to-background",
        frameClassName,
      )}
    >
      <Image
        alt={alt}
        fill
        className={cn(
          fit === "contain"
            ? "object-contain object-center p-1.5 sm:p-2"
            : "object-cover object-center",
          className,
        )}
        {...props}
      />
    </div>
  );
}
