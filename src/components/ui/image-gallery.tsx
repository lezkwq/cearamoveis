import { useEffect, useRef, useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface EditorialGalleryImage {
  src: string;
  alt: string;
  objectPosition?: string;
  maxExpandedAspectRatio?: number;
}

interface ImageGalleryProps {
  images: readonly EditorialGalleryImage[];
  className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0, gap: 0 });

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const { width, height } = entry.contentRect;
      const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;
      setSize({ width, height, gap });
    });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={galleryRef}
      className={cn(
        "hidden h-[420px] w-full gap-1.5 overflow-hidden md:flex lg:h-[460px]",
        className,
      )}
    >
      {images.map(({ src, alt, objectPosition, maxExpandedAspectRatio }) => {
        let hoverGrow = 4;
        if (maxExpandedAspectRatio) {
          hoverGrow = 1;
          const availableWidth = size.width - size.gap * (images.length - 1);
          if (availableWidth > 0 && images.length > 1) {
            const expandedWidth = Math.min(
              size.height * maxExpandedAspectRatio,
              (availableWidth * 4) / (images.length + 3),
            );
            // Solve the flex ratio so portrait images keep their height-based scale.
            hoverGrow = Math.max(
              1,
              (expandedWidth * (images.length - 1)) / (availableWidth - expandedWidth),
            );
          }
        }
        return (
          <div
            key={src}
            style={{ "--gallery-hover-grow": hoverGrow } as CSSProperties}
            className="h-full min-w-0 flex-1 overflow-hidden transition-[flex-grow] duration-700 ease-[ease-in-out] hover:grow-[var(--gallery-hover-grow)] motion-reduce:transition-none"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              decoding="async"
              draggable={false}
              style={{ objectPosition }}
              className="h-full w-full select-none object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
